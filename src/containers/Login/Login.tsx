import React from "react";
import * as S from "./Login.style";
import { auth, provider } from "../../firebase.config";

const Login = () => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log("#result", result))
      .catch((error) => console.error(error.message));
  };

  return (
    <S.Login>
      <S.LoginBox>
        <S.SlackIcon
          src="https://static.surveysparrow.com/site/assets/integrations/inner/slack.png"
          alt="slack icon"
        />
        <span>Unete al mejor chat del mundo</span>
        <S.JoinButton onClick={signIn}>Ingresar con Google</S.JoinButton>
      </S.LoginBox>
    </S.Login>
  );
};

export default Login;
