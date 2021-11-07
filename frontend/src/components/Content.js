import React, { useState } from "react";
import { Link, useHistory  } from "react-router-dom";
import { login } from '../helpers/auth';


import "../styles/Content.css";



// Landing page content
function Content() {

  const history = useHistory();
  
  const [isPending, setIsPending] = useState(false)

  const handleDemoLogin = () => {

  const credentials = {
      'username': 'demo',
      'password': 'demo-password'
    };

  console.log(credentials);

  // setIsPending(true)

    // Make the post request for signing in
    fetch('/api/login', {
      method: 'post',
      body: JSON.stringify(credentials)
    }).then(r => r.json())
      .then(token => {
        if (token.access_token){
          login(token);
          // setErrorDiv("error-div-none");
          setIsPending(false)
          history.push('/dashboard');
        } else {
          setIsPending(false)
          // setErrorDiv("error-div");
        }
      })



};

  return (
    <div className="content">
      <h1>Learn how to trade risk free</h1>
      <h2>Worry less about money and get to learn</h2>
      <div className='landing-links'>
        <Link className="signup-btn" to="/signup">
          Get started for free
        </Link>
        <Link className="demo-btn" to="#" onClick={handleDemoLogin}>
          Quick Demo
        </Link>
        <a class="scroll-down" href="#about">
          <i class="uil uil-arrow-from-top"></i>
        </a>
      </div>
    </div>
  );
}

export default Content;
