import React, { useState } from 'react';
import '../styles/LoginForm.css';
import { useHistory } from 'react-router-dom';

import { login } from '../helpers/auth';

function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorDiv, setErrorDiv] = useState('error-div-none');
  const [isPending, setIsPending] = useState(false)

  const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let credentials = {
      'username': username,
      'password': password
    };

    setIsPending(true)

    // Make the post request for signing in 
    fetch('https://cashx.tech/api/login', {
      method: 'post',
      body: JSON.stringify(credentials)
    }).then(r => r.json())
      .then(token => {
        if (token.access_token){
          login(token);
          setErrorDiv("error-div-none");
          setIsPending(false)
          history.push('/dashboard');
        } else {
          setIsPending(false)
          setErrorDiv("error-div");
        }
      })
  }

  const handleClose = () => {
    setErrorDiv("error-div-none");
  }

    
    return (
        <div className="loginform">
            <div className={errorDiv}>
              <p>Incorrect username or password</p>
              <div onClick={handleClose}>&times;</div>
            </div>
            <form className="login">
                <label htmlFor="username">
                    Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleUsernameChange}
                />

                <label for="password">
                    Password 
                    <span><small>Forgot password?</small></span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                />

                {!isPending && <button type="submit" onClick={handleSubmit}>
                  Sign In
                </button>}
                {isPending && <button>Signing in ...</button>}
            </form>
        </div>
    )
}

export default LoginForm
