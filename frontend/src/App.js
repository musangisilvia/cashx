import React from "react";
import { useAuth } from "./helpers/auth";

import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import MarketsPage from "./pages/MarketsPage";
import StockPage from "./pages/StockPage";
import SellPage from "./pages/SellPage";
import BuyPage from "./pages/BuyPage";
import PortfolioPage from "./pages/PortfolioPage";
import History from "./pages/HistoryPage";
import Research from "./pages/ResearchPage";
import Wallet from "./pages/Wallet";
import Settings from "./pages/Settings";


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
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/markets" component={MarketsPage} />
        <PrivateRoute exact path="/stocks/:symbol" component={StockPage} />
        <PrivateRoute exact path="/stocks/:symbol/sell" component={SellPage} />
        <PrivateRoute exact path="/stocks/:symbol/buy" component={BuyPage} />
        <PrivateRoute exact path="/portfolio" component={PortfolioPage} />
        <PrivateRoute exact path="/history" component={History} />
        <PrivateRoute exact path="/research" component={Research} />
        <PrivateRoute exact path="/wallet" component={Wallet} />
        <PrivateRoute exact path="/settings" component={Settings} />

        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
