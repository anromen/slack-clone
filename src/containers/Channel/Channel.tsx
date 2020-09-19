import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../firebase.config";
import * as S from "./Channel.style";

type Message = {
  message: string;
  timestamp: {
    seconds: number;
    nanoseconds: number;
  };
  user: string;
  userIcon: string;
};

const Channel = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const [room, setRoom] = useState<any>(null);
  const [messages, setMessages] = useState<any>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef && bottomRef.current) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [bottomRef]);
  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoom(snapshot.data()));
  }, [roomId]);
  useEffect(() => {
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomId]);

  console.log("#messages", messages);

  return (
    <S.Channel>
      <S.Header>
        <S.HighlightedText>#{room?.name}</S.HighlightedText>
      </S.Header>

      <S.ChatMessages>
        {messages?.map(({ message, timestamp, user, userIcon }: Message) => (
          <S.Message>
            <S.MessageImage>
              <img src={userIcon} alt={`mensaje de ${user}`} />
            </S.MessageImage>
            <S.MessageText>
              <S.MessageHeader>
                {user}
                <small>{new Date(timestamp?.nanoseconds).toString()}</small>
              </S.MessageHeader>
              {message}
            </S.MessageText>
          </S.Message>
        ))}
        <div style={{ float: "left", clear: "both" }} ref={bottomRef}></div>
      </S.ChatMessages>

      <S.NewMessageBox>
        <S.MessageInput placeholder="Escribe un mensaje a #channel name" />
      </S.NewMessageBox>
    </S.Channel>
  );
};

export default Channel;
