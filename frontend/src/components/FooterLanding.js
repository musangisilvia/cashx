import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.svg';
import '../styles/FooterLanding.css'

function FooterLanding() {
        return (
                <>
                <footer>
                        <img src={Logo} alt="CASHX" /> <br/>
                        <p>&copy; 2021 CashX Inc.</p>

                        <Link to="/signup">Sign up</Link> <br/>
                        <Link to="/login">Sign in</Link> <br/>
                        <Link to="/demo">Quick Demo</Link> <br/>
                </footer> 
                </>
        )
}

export default FooterLanding
