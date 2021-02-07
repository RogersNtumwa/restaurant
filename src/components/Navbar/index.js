import React, { Fragment } from "react";
import { Bars, Nav, Navicon, NavLink } from "./NavbarElements";


const Navbar = ({ toggle }) => {
  
  return (
    <Fragment>
      <Nav>
        <NavLink to="/">Cheapzone</NavLink>
        <Navicon onClick={toggle}>
          <p>Pizza</p>
          <Bars />
        </Navicon>
      </Nav>
    </Fragment>
  );
};

export default Navbar;
