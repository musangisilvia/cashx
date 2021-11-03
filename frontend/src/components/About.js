import React, { useState } from 'react'

import '../styles/About.css'

function About() {

        return (        
                <div className="cont about" id="about">
                        <div className="about-section">
                                <div className="about-info">
                                        <h3>Real Market Prices</h3>
                                        <p>
                                                Through powerful APIs get to play around with actual market data.
                                                Practice trading using real time prices of all the stocks and get to see how
                                                you'd perform were you using actual money

                                        </p>
                                        <h6>Powered by <span>IEX Cloud</span></h6>
                                </div>
                                <img src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="about section image" />
                        </div>

                        <div className="about-section">
                                <div className="about-info">
                                        <h3>Unlimited Virtual Cash</h3>
                                        <p>We provide access to unlimited virtual cash that you can use to properly practise trading and 
                                        feel like you're doing it for real.
                                         </p>
                                        <h6>Powered by <span>CASHX</span></h6>

                                </div>
                                <img src="https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1106&q=80" alt="about section image" />
                        </div>

                        <div className="about-section">
                                <div className="about-info">
                                        <h3>Curated list of latest news</h3>
                                        <p>Get access to latest events across the world as they happen and insights from social media to help you make decisions as you learn </p>
                                <h6>Powered by <span>Finnhub</span></h6>

                                </div>
                                <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="about section image" />
                        </div>

                </div>



        )
}

export default About
