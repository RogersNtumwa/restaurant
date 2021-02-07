import React, { Fragment } from "react";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Menu from "../components/Menu";

const Main = () => {
  return (
    <Fragment>
      <Hero />
      <Menu heading="Your Favourate Pizza Delivered" />
      <Feature />
    </Fragment>
  );
};

export default Main;
