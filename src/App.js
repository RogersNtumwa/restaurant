import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from "./GlobalStyles";
import Alert from "./components/Alert";
import LogInScreen from "./screens/LogInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import Main from "./screens/Main";

function App() {
  return (
    <Router>
      <Alert />
      <GlobalStyle />
      <Route path="/" component={Main} exact />
      <Route path="/signin" component={LogInScreen} exact />
      <Route path="/register" component={RegisterScreen} exact />
    </Router>
  );
}

export default App;
