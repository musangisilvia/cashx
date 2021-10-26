import '../styles/NotFound.css'
import '../styles/App.css'
import ErrorHeader from '../components/ErrorHeader'
import NotFound from '../images/notfound-removebg-preview.png'

import React from 'react'

function NotFoundPage() {
        return (
                <div className="notfound">
                        <ErrorHeader />
                        <div className="row">
                                <img src={NotFound}/>
                                <div className="text">
                                        <h1>404</h1>
                                        <h4>Page not found</h4>
                                        <button>Go back Home</button>
                                </div>
                        </div>
                </div>
        )
}

export default NotFoundPage
