import styled from "styled-components";

export const Channel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const Header = styled.div`
  padding: 16px 32px;
  border-bottom: 1px solid #f0f0f0;
`;

export const HighlightedText = styled.span`
  font-weight: 700;
`;

export const ChatMessages = styled.div`
  height: calc(100vh - 175px);
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
`;

export const Message = styled.div`
  display: flex;
  padding: 16px 32px;

  &:hover {
    background: #f0f0f0;
  }
`;

export const MessageImage = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 3px;

  & > img {
    object-fit: cover;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const MessageText = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 14px;
  padding-left: 8px;
`;

export const MessageHeader = styled.span`
  font-weight: 700;
  margin-bottom: 8px;
  display: inline-block;

  & > small {
    font-weight: 400;
    color: #0f0f0f;
    margin-left: 16px;
  }
`;

export const NewMessageBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 32px;
  background: transparent;
`;

export const MessageInput = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 1px solid #f0f0f0;
  outline: none;
  padding: 16px;
  font-size: 16px;
`;

export const SendMessageButton = styled.button`
  outline: none;
  border: none;
  background-color: #62ab6c;
  color: #fff;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;

  position: absolute;
  bottom: 21px;
  right: 37px;
  z-index: 1;

  &:hover {
    background-color: #4e8856;
  }
`;
