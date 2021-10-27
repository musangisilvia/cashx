import React, { useState } from 'react'

import '../styles/About.css'

function About() {

        return (
                <div className="about">
                        <h1>Features</h1>
                       <div className="features">
                                <h3>Trending Tweets</h3>
                                <p>Read what people are saying about the market, in real time.</p>
                                <h6>Powered by <span>Twitter</span></h6>
                       </div>
                       <div className="features">
                                <h3>Real Market Prices</h3>
                                <p>Actual market prices of stock.</p>
                                <h6>Powered by <span>IEX Cloud</span></h6>
                       </div>
                       <div className="features">
                                <h3>Game Money</h3>
                                <p>Once you sign up,  you'll get <span className="money">100000</span> Shillings worth of Game Money to practice.</p>
                                <h6>Powered by <span>CASHX</span></h6>
                       </div>
                       <div className="features">
                               <h3>News</h3>
                               <p>Get information about the stock market as it emerges.</p>
                               <h6>Powered by <span>Finnhub</span></h6>
                       </div>
                </div>
        )
}

export default About
