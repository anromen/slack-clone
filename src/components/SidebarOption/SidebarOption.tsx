import React from "react";
import * as S from "./SidebarOption.style";

//Icons
import CloseIcon from "@material-ui/icons/Close";
import { useHistory } from "react-router-dom";

type OptionProps = {
  variant: "link" | "button";
  text: string;
  id?: string;
};

const SidebarOption: React.FC<OptionProps> = ({ variant, text, id }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(`/room/${id}`);
  };

  return variant === "link" ? (
    <S.SidebarLink onClick={handleClick}>
      <S.Option>
        <S.OptionIconWrapper></S.OptionIconWrapper>
        <S.OptionContent>
          <S.OptionName>
            <S.OptionNameIcon>#</S.OptionNameIcon>
            {text}
          </S.OptionName>
          <S.OptionCloseIcon>
            <CloseIcon />
          </S.OptionCloseIcon>
        </S.OptionContent>
      </S.Option>
    </S.SidebarLink>
  ) : (
    <S.Option>
      <S.OptionIconWrapper></S.OptionIconWrapper>
      <S.OptionContent>
        Algo<button>X</button>
      </S.OptionContent>
    </S.Option>
  );
};

export default SidebarOption;
