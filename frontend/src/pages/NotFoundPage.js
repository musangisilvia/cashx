import '../styles/NotFound.css'
import '../styles/App.css'
import ErrorHeader from '../components/ErrorHeader'
import NotFound from '../images/notfound-removebg-preview.png'

import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
        return (
                <div className="notfound">
                        <ErrorHeader />
                        <div className="row">
                                <img src={NotFound} alt="error:404"/>
                                <div className="text">
                                        <h1>404</h1>
                                        <h4>Page not found</h4>
                                        <Link to="/">
                                                <button>Go back Home</button>
                                        </Link>
                                </div>
                        </div>
                </div>
        )
}

export default NotFoundPage
