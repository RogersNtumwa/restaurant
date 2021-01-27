import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { globalStyle } from "./GlobalStyles";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Feature from "./components/Feature";

function App() {
  return (
    <Router>
      <globalStyle />
      <Hero />
      <Menu heading="Your Favourate Pizza Delivered" />
      <Feature />
    </Router>
  );
}

export default App;
