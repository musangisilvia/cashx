import React from "react";
import { useAuth } from "./helpers/auth";

import { Switch, Route, Link, Redirect } from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Transact from "./pages/TransactPage";
import Analysis from "./pages/AnalysisPage";
import History from "./pages/HistoryPage";
import Research from "./pages/ResearchPage";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";
import InternalServerError from "./pages/InternalServerError";


import "./styles/App.css";
import NotFoundPage from "./pages/NotFoundPage";

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
        <PrivateRoute path="/transact" component={Transact} />
        <PrivateRoute path="/analysis" component={Analysis} />
        <PrivateRoute path="/history" component={History} />
        <PrivateRoute path="/research" component={Research} />
        <PrivateRoute path="/wallet" component={Wallet} />
        <PrivateRoute path="/settings" component={Settings} />

        <Route exact path="/500">
          <InternalServerError />
        </Route>
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
