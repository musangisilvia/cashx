import React from 'react'
import { Link } from 'react-router-dom'
import ErrorHeader from '../components/ErrorHeader'
import InternalError from '../images/internalerror.png'

import '../styles/InternalError.css'

function InternalServerError() {
        return (
                <div className="internalerror">
                        <ErrorHeader />
                        <div className="row">
                                <img src={InternalError} alt='error:500'/>
                                <div className="text">
                                        <h1>500</h1>
                                        <h4>Sorry, our servers seem to be having an issue.</h4>
                                        <Link to="/">
                                                <button>Go back Home</button>
                                        </Link>
                                </div>
                        </div>
                </div>
        )
}

export default InternalServerError
