import React from "react";
import { Box } from "@material-ui/core";
import * as S from "./Sidebar.style";
import SidebarOption from "../../components/SidebarOption/SidebarOption";

//Icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SectionHeader = () => {
  return (
    <S.SectionHeader>
      <S.SideBarButton>
        <ArrowRightIcon fontSize="inherit" />
      </S.SideBarButton>
      <S.SectionName>
        <S.LabelButton>Algo</S.LabelButton>
        <S.SideBarButton>
          <MoreVertIcon fontSize="inherit" />
        </S.SideBarButton>
      </S.SectionName>
      <S.SideBarButton>
        <AddIcon fontSize="inherit" />
      </S.SideBarButton>
    </S.SectionHeader>
  );
};

const Section = () => {
  return (
    <>
      <SectionHeader />
      <SidebarOption variant="link" />
    </>
  );
};

const WorkspaceHeader = () => {
  return (
    <S.WorkspaceButton>
      <S.WorkspaceName>
        whatever
        <ArrowDropDownIcon />
      </S.WorkspaceName>
      <S.MessageButton>
        <CreateOutlinedIcon />
      </S.MessageButton>
    </S.WorkspaceButton>
  );
};

const Sidebar = () => {
  return (
    <Box width="260px" height="100%" bgcolor="rgb(63, 14, 64)">
      <WorkspaceHeader />
      <Section />
    </Box>
  );
};

export default Sidebar;
