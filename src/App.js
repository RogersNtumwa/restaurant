import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Feature from "./components/Feature";
import Alert from "./components/Alert";

function App() {
  return (
    <Router>
      <Alert />
      <GlobalStyle />
      <Hero />
      <Menu heading="Your Favourate Pizza Delivered" />
      <Feature />
    </Router>
  );
}

export default App;
