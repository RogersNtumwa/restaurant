import React from "react";
// import { NavDropdown } from "react-bootstrap";
// import { logOut } from "../../actions/auth";
// import { useDispatch, useSelector } from "react-redux";
// import { FaUser } from "react-icons/fa";
import {
  Closeicon,
  Icon,
  SidebarContainer,
  SideBarLink,
  SideBarMenu,
  // SideBarNav,
} from "./SidebarElements";
// import { LinkContainer } from "react-router-bootstrap";

const Sidebar = ({ isOpen, toggle }) => {
  // const userInfo = useSelector((state) => state.auth);
  // const { user, isAuthenticated } = userInfo;
  // const dispatch = useDispatch();
  // const logoutHandler = () => {
  //   dispatch(logOut());
  // };
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <Closeicon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to="home" smooth={true} onClick={toggle}>
          Home
        </SideBarLink>
        {/* <SideBarNav to="/" smooth={true} onClick={toggle}>
          Home
        </SideBarNav> */}
        <SideBarLink to="menu" smooth={true} spy={true} onClick={toggle}>
          Menu
        </SideBarLink>
        <SideBarLink to="special" smooth={true} onClick={toggle}>
          Feature
        </SideBarLink>
        <SideBarLink to="/" onClick={toggle}>
          Kitchen
        </SideBarLink>

        {/* {isAuthenticated ? (
          <NavDropdown title={user.name} id="username">
            <NavDropdown.Item onClick={logoutHandler}>LogOut</NavDropdown.Item>
          </NavDropdown>
        ) : (
          <LinkContainer to="/signin">
            <SideBarNav to="/signin" onClick={toggle}>
              <FaUser /> SIGNIN
            </SideBarNav>
          </LinkContainer>
        )} */}
      </SideBarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
