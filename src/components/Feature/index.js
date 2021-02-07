import React from "react";
import { FeaturContainer, FeatureBtn } from "./FeatureElements";
import { Link } from "react-scroll";

const Feature = () => {
  return (
    <FeaturContainer id="special">
      <h1>Pizza Of The Day</h1>
      <p>Truffle alfredo sauce topped with 24 cart gold dust</p>
      <Link to="menu" smooth={true}>
        <FeatureBtn>Order Now</FeatureBtn>
      </Link>
    </FeaturContainer>
  );
};

export default Feature;
