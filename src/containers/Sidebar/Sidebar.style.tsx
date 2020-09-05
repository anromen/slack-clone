import styled from "styled-components";
import { Button } from "@material-ui/core";

export const SidebarItem = styled.div`
  padding: 0 16px;
`;

export const SideBarButton = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  outline: none;
  color: rgb(207, 195, 207);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  border-radius: 3px;
  font-size: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const WorkspaceButton = styled.div`
  font-weight: 700;
  width: 100%;
  color: #fff;
  border-top: 1px solid rgb(82, 38, 83);
  border-bottom: 1px solid rgb(82, 38, 83);
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 15px;

  &:hover {
    background-color: rgb(53, 13, 54);
  }
`;

export const WorkspaceName = styled.span`
  display: flex;
  align-items: center;
`;

export const MessageButton = styled.button`
  width: 36px;
  height: 36px;
  background-color: #fff;
  color: rgb(53, 13, 54);
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  border: none;
`;

export const SectionHeader = styled(SidebarItem)`
  display: flex;
  width: 100%;
`;

export const SectionName = styled.div<{ highlighted?: boolean }>`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4px;
  height: 28px;
`;

export const LabelButton = styled.button<{ highlighted?: boolean }>`
  flex: 1;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ highlighted }) => (highlighted ? "#fff" : "rgb(207, 195, 207)")};
  cursor: pointer;
  font-size: 15px;
  margin-right: 4px;
  text-align: left;
`;
