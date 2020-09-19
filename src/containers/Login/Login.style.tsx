import styled from "styled-components";

export const Login = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
`;

export const LoginBox = styled.div`
  max-width: 500px;
  width: 100%;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 32px;
  border-radius: 5px;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const SlackIcon = styled.img`
  width: 75px;
  height: 75px;
  margin-bottom: 64px;
`;

export const JoinButton = styled.button`
  margin-top: 16px;
  padding: 16px 32px;
  background-color: #579881;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 5px;

  &:hover {
    background-color: #417261;
  }
`;
