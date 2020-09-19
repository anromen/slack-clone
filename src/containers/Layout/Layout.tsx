import React from "react";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import * as S from "./Layout.style";

const Chat: React.FC<any> = ({ children }) => {
  return (
    <S.MainSection>
      <S.HeaderSection>
        <Header />
      </S.HeaderSection>
      <S.ContentSection>
        <Sidebar />
        {children}
      </S.ContentSection>
    </S.MainSection>
  );
};

export default Chat;
