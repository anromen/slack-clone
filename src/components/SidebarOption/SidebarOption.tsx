import React from "react";
import * as S from "./SidebarOption.style";

//Icons
import CloseIcon from "@material-ui/icons/Close";

type OptionProps = {
  variant: "link" | "button";
};

const SidebarOption: React.FC<OptionProps> = ({ variant }) => {
  return variant === "link" ? (
    <S.SidebarLink>
      <S.Option>
        <S.OptionIconWrapper></S.OptionIconWrapper>
        <S.OptionContent>
          <S.OptionName>
            <S.OptionNameIcon>#</S.OptionNameIcon>
            Algo
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