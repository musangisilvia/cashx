import { useState } from "react";
import { authFetch } from "../helpers/auth"


import "../styles/Buy.css";

const Buy = ({ data }) => {

  let [sharesToBuy, setSharesToBuy] = useState(0);

  const handleSharesToBuyChange = (e) => {
    setSharesToBuy(e.target.value);
  }

  const handleBuy = () => {

    const payload = {
      'current_price': data.quotes.c,
      'shares_to_buy': sharesToBuy,
      'company_name': data.stock.name
    }

    const symbol = data.stock.symbol 

    authFetch('http://localhost:5000/api/stocks/' + symbol + '/buy', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);

    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  const handleIncrement = () => {
    sharesToBuy = Number(sharesToBuy);
    sharesToBuy += 1;
    setSharesToBuy(sharesToBuy)
  }

   const handleDecrement = () => {
    if (sharesToBuy > 0) {
      sharesToBuy = Number(sharesToBuy);
      sharesToBuy -= 1;
      setSharesToBuy(sharesToBuy);
    }
  }

  return (
    <div className="buy-card">
    <p className="title">Stock Information</p>
      <div className="buy-card-row">
        <p>Total Invested </p>
        <p>$0</p>
      </div>
      <div className="buy-card-row">
        <p>Shares Owned</p>
        <p>0</p>
      </div>
      <div className="buy-card-row">
        <p>Gross Sum</p>
        <p>$0</p>
      </div>
      <div className="buy-card-row">
        <div className="buy-input">
          <div className="buy-minus" onClick={handleDecrement}>
            <i class="uil uil-minus"></i>
          </div>
          <input
            type="number"
            min="0"

            value={sharesToBuy}
            onChange={handleSharesToBuyChange}
          />
          <div className="buy-plus" onClick={handleIncrement}>
            <i class="uil uil-plus"></i>
          </div>
        </div>

        <div className="buy-btn" onClick={handleBuy}>
        <p>Buy</p>
        </div>

      </div>

    </div>
  );
}

export default Buy;