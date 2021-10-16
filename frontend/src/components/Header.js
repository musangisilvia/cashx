import React from "react";

import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/Logo.svg";

import "../styles/Header.css";

// Header component for the landing page
function Header() {
  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>

      <Link className="btn" to="/login">
        Log In
      </Link>
    </header>
  );
}

export default Header;
