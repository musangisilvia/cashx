import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../images/Logo.svg'
import '../styles/ErrorHeader.css'

function ErrorHeader() {
        return (
                <header className="errorheader">
                        <Logo />
                </header>
        )
}

export default ErrorHeader
