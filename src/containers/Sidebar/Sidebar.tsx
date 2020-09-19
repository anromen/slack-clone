import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import * as S from "./Sidebar.style";
import SidebarOption from "../../components/SidebarOption/SidebarOption";
import db from "../../firebase.config";

//Icons
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const SectionHeader: React.FC<any> = ({ onAdd }) => {
  return (
    <S.SectionHeader>
      <S.SideBarButton>
        <ArrowRightIcon fontSize="inherit" />
      </S.SideBarButton>
      <S.SectionName>
        <S.LabelButton>Canales</S.LabelButton>
        <S.SideBarButton>
          <MoreVertIcon fontSize="inherit" />
        </S.SideBarButton>
      </S.SectionName>
      <S.SideBarButton onClick={onAdd}>
        <AddIcon fontSize="inherit" />
      </S.SideBarButton>
    </S.SectionHeader>
  );
};

const Section = ({ rooms, onAdd }: { rooms: Array<any>; onAdd: Function }) => {
  return (
    <>
      <SectionHeader onAdd={onAdd} />
      {rooms.map((room) => (
        <SidebarOption
          key={room.id}
          id={room.id}
          text={room.name}
          variant="link"
        />
      ))}
    </>
  );
};

const WorkspaceHeader = () => {
  return (
    <S.WorkspaceButton>
      <S.WorkspaceName>
        Whatever
        <ArrowDropDownIcon />
      </S.WorkspaceName>
      <S.MessageButton>
        <CreateOutlinedIcon />
      </S.MessageButton>
    </S.WorkspaceButton>
  );
};

const Sidebar = () => {
  const [channels, setChannels] = useState<Array<any>>([]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({ id: doc.id, name: doc.data().name }))
      )
    );
  }, []);

  const handleChannelAdd = () => {
    const channelName = prompt("Por favor ingresa el nombre del canal");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  return (
    <Box width="260px" height="100%" bgcolor="rgb(63, 14, 64)">
      <WorkspaceHeader />
      <Section rooms={channels} onAdd={handleChannelAdd} />
    </Box>
  );
};

export default Sidebar;
