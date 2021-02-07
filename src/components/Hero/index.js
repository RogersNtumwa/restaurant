import React from "react";
import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from "./HeroElements";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroItems>
          <HeroH1>Greatest Pizza Ever</HeroH1>
          <HeroP>Ready in 60 minutes</HeroP>
          <Link to="menu" smooth={true}>
            <HeroBtn>Place Order Now</HeroBtn>
          </Link>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
