import styled from "styled-components";

export const Option = styled.div`
  padding: 0 15px;
  width: 100%;
  display: flex;

  &:hover {
    background-color: rgb(53, 13, 54);
  }
`;

export const OptionIconWrapper = styled.div`
  width: 28px;
  height: 28px;
`;

export const OptionContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  color: rgb(207, 195, 207);
  font-size: 15px;
`;

export const OptionName = styled.div`
  display: flex;
  align-items: center;
`;

export const OptionNameIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
`;

export const OptionCloseIcon = styled.button`
  width: 28px;
  height: 28px;
  border: none;
  background-color: transparent;
  outline: none;
  color: rgb(207, 195, 207);
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`;

export const SidebarLink = styled.a`
  display: block;
  width: 100%;
  padding-left: 4px;
  text-decoration: none;
  justify-content: space-between;
  cursor: pointer;
`;
