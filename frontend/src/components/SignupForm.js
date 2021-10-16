import React from 'react'
import '../styles/SignupForm.css'

function SignupForm() {
    return (
        <div>
            <form className="signup">
                <div className="form-group">
                    <label for="username">Username</label> <br/>
                    <input type="text" name="username"/>
                </div>

                <div className="form-group"> 
                    <label for="email">Email Address</label> <br/>
                    <input type="email" name="email"/>
                </div>

                <div className="form-group">
                    <label for="password">Password</label> <br/>
                    <input type="password" name="password"/>
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
