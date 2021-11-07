import React, { useState } from 'react'
import { login } from '../helpers/auth';
import { useHistory } from 'react-router-dom';

import '../styles/SignupForm.css'

function SignupForm() {

    const history = useHistory()

    const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorDiv, setErrorDiv] = useState('error-div-none');
    const [isPending, setIsPending] = useState(false)


    const handleSubmit = (e) => {
        e.preventDefault();

        let user = {
            'username': username,
            'password':  password
        };
        setIsPending(true)
        setTimeout(() => {
          fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
            }).then(r => r.json())
            .then(token => {
                if (token.access_token){
                    console.log(token)
                    login(token);
                    setErrorDiv("error-div-none");
                    setIsPending(false)
                    history.push('/dashboard', {params: user.username});
                } else {
                    setIsPending(false)
                    setErrorDiv("error-div");
                }
            })
        }, 3000);

    }

    const handleClose = () => {
        setErrorDiv("error-div-none");
      }

    return (
        <div>
            <div className={errorDiv}>
              <p>Username already exists</p>
              <div onClick={handleClose}>&times;</div>
            </div>
            <form className="signup" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="username">Username</label> <br/>
                    <input
                        type="text"
                        name="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="form-group"> 
                    <label for="email">Email Address</label> <br/>
                    <input
                        type="email" 
                        name="email"
                        required
                        //value={email}
                        //onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label for="password">Password</label> <br/>
                    <input 
                        type="password" 
                        name="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label for="cpassword">Confirm Password</label> <br/>
                    <input type="password" name="cpassword"/> 
                </div>

                {!isPending && <button type="submit">Sign Up</button>}
                {isPending && <button type="submit">Adding user...</button>}
            </form>
        </div>
    )
}

export default SignupForm
