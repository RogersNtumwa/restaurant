import React from "react";
import {
  Closeicon,
  Icon,
  SidebarContainer,
  SideBarLink,
  SideBarMenu,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <Closeicon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="home" smooth={true} onClick={toggle}>
          Home
        </SideBarLink>
        <SideBarLink to="menu" smooth={true} spy={true} onClick={toggle}>
          Menu
        </SideBarLink>
        <SideBarLink to="special" smooth={true} onClick={toggle}>
          Feature
        </SideBarLink>
        <SideBarLink to="/" onClick={toggle}>
          Kitchen
        </SideBarLink>
      </SideBarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
