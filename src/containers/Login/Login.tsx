import React, { useContext } from "react";
import * as S from "./Login.style";
import { auth, provider } from "../../firebase.config";
import { StateContext } from "../../context/StateProvider";

const Login = () => {
  const { dispatch } = useContext(StateContext);

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => dispatch({ type: "SET_USER", payload: result.user }))
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
