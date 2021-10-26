import React, { useState } from 'react'
import '../styles/SignupForm.css'

function SignupForm() {

    const [username, setUsername] = useState('');
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        let user = {
            'username': username,
            'password':  password
        };

        fetch('http://localhost:5000/api/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(r => r.json())
        .then(token => {
            console.log(token)
            // if (token.access_token){
            //   login(token);
            //   history.push('/dashboard');
            //   setErrorDiv("error-div-none");
            // } else {
            //   setErrorDiv("error-div");
            // }
          })

    }

    return (
        <div>
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

                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignupForm
