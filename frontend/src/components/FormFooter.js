import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/FormFooter.css'


function FormFooter() {
    return (
        <div className="formfooter">
            <h4>New to CashX? 
            <span><Link to="/signup">
                         Create an account
                    </Link>
            </span></h4>
        </div>
    )
}

export default FormFooter
