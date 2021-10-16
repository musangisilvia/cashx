import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/FormFooter.css'


function FormFooter(props) {
    return (
        <div className="formfooter">
            <h4>{props.acc} 
            <span><Link to={props.link}>
                         {props.linkmsg}
                    </Link>
            </span></h4>
        </div>
    )
}

export default FormFooter
