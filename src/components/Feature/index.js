import React from "react";
import { FeaturContainer, FeatureBtn } from "./FeatureElements";

const Feature = () => {
  return (
    <FeaturContainer id="special">
      <h1>Pizza Of The Day</h1>
      <p>Truffle alfredo sauce topped with 24 cart gold dust</p>
      <FeatureBtn>Order Now</FeatureBtn>
    </FeaturContainer>
  );
};

export default Feature;
