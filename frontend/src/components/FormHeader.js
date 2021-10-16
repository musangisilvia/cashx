import React from 'react'
import { ReactComponent as Logo } from '../images/Logo.svg';
import '../styles/FormHeader.css'

function FormHeader() {
    return (
        <div className="formHeader">
            <Logo />
            <h2>Sign In</h2>
        </div>
    )
}

export default FormHeader
