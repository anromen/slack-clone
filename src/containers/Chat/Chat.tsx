import React from "react";
import { Grid, Box } from "@material-ui/core";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import * as S from "./Chat.style";

const Chat = () => {
  return (
    <S.MainSection>
      <S.HeaderSection>
        <Header />
      </S.HeaderSection>
      <S.ContentSection>
        <Sidebar />
      </S.ContentSection>
    </S.MainSection>
  );
};

export default Chat;
