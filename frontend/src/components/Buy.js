import { useState } from "react";

import "../styles/Buy.css";

const Buy = () => {

  let [sharesToBuy, setSharesToBuy] = useState(0);

  const handleSharesToBuyChange = (e) => {
    setSharesToBuy(e.target.value);
  }

  const handleBuy = () => {
    console.log(sharesToBuy);
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