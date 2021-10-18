import React from "react";
import { useAuth } from "./helpers/auth";

import { Switch, Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";

import "./styles/App.css";

function App() {
  const [logged] = useAuth();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          {/* If the user is already logged in redirect to dashboard */}
          {logged ? <Redirect to="dashboard" /> : <LoginPage />}
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
