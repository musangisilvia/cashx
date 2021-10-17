import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../images/Logo.svg';
import '../styles/FormHeader.css';

function FormHeader({ title }) {
    return (
        <div className="formHeader">
            <Link to="/">
                <Logo />
            </Link>
            <h2>{title}</h2>
        </div>
    )
}

export default FormHeader
