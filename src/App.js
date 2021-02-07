import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Alert from "./components/Alert";
import LogInScreen from "./screens/LogInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Main from "./screens/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };
  return (
    <Router>
      <GlobalStyle />
      <Alert />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Route path="/" component={Main} exact />
      <Route path="/signin" component={LogInScreen} exact />
      <Route path="/register" component={RegisterScreen} exact />
    </Router>
  );
}

export default App;
