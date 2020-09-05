import styled from "styled-components";
import {
  Badge as MaterialBadge,
  Button as MaterialButton,
  Avatar as MaterialAvatar,
} from "@material-ui/core";

export const SearchButton = styled(MaterialButton)`
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.05);

  &:hover {
    color: #fff;
  }
`;

export const Avatar = styled(MaterialAvatar)`
  width: 28px;
  height: 28px;
  max-width: 28px;
  max-height: 28px;
`;

export const Badge = styled(MaterialBadge)`
  background-color: "#2BAC76";
  color: "#2BAC76";
  box-shadow: 0 0 0 2px rgb(53, 13, 54);

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid currentColor;
    content: "";
  }
`;
