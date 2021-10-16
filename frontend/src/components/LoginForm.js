import React from 'react'
import '../styles/LoginForm.css'

function LoginForm() {
    return (
        <div className="loginform">
            <form className="login">
                <label htmlFor="username">
                    Username or Email address
                </label>
                <input type="text" name="username"/>

                <label for="password">
                    Password 
                    <span><small>Forgot password?</small></span>
                </label>
                <input type="password" name="password"/>

                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm
