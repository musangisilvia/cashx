import React from "react";
import { Link } from "react-router-dom";

import "../styles/Content.css";

// Landing page content
function Content() {
  return (
    <div className="content">
      <h1>Learn how to trade risk free</h1>
      <h2>Worry less about money and get to learn</h2>
      <Link className="signup-btn" to="/signup">
        Get started for free
      </Link>
      <Link className="demo-btn" to="#">
        Quick Demo
      </Link>
    </div>
  );
}

export default Content;
