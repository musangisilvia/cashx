import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/FormFooter.css'


function FormFooter({ acc, link, linkmsg }) {
    return (
        <div className="formfooter">
            <h4>{acc} 
            <span><Link to={link}>
                         {linkmsg}
                    </Link>
            </span></h4>
        </div>
    )
}

export default FormFooter
