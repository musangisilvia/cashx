import { useState } from "react";
import { authFetch } from "../helpers/auth";
import { useHistory } from "react-router-dom";

import Flash from "./Flash";

import "../styles/Buy.css";

const Buy = ({ data }) => {
  const history = useHistory();

  let [sharesToBuy, setSharesToBuy] = useState(0);
  const [flash, setFlash] = useState(null);
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");
  const [grossSum, setGrossSum] = useState(0);

  const handleSharesToBuyChange = (e) => {
    setSharesToBuy(e.target.value);
    setGrossSum(e.target.value * data.quotes.c);
  };

  const handleBuy = () => {
    if (sharesToBuy * data.quotes.c > data.user_data.balance) {
      setFlash(true);
      setType("error");
      setMsg("Insufficient balance");
    }

    if (sharesToBuy < 0) {
      setFlash(true);
      setType("error");
      setMsg("Invalid number of shares");
    }

    if (
      sharesToBuy > 0 &&
      sharesToBuy * data.quotes.c < data.user_data.balance
    ) {
      const payload = {
        current_price: data.quotes.c,
        shares_to_buy: sharesToBuy,
        company_name: data.stock.name,
      };

      const symbol = data.stock.symbol;

      authFetch("/api/stocks/" + symbol + "/buy", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (response.status !== 201) {
            setFlash(true);
            setType("error");
          } else {
            history.push("/stocks/" + data.stock.symbol);
          }
          return response.json();
        })
        .then((data) => {
          setMsg(data.error);
        })
        .catch((error) => {
          setFlash(true);
          setType("error");
          setMsg(error);
          // console.error('Error:', error);
        });
    }
  };

  const handleIncrement = () => {
    sharesToBuy = Number(sharesToBuy);
    sharesToBuy += 1;
    setSharesToBuy(sharesToBuy);
    setGrossSum(sharesToBuy * data.quotes.c);
  };

  const handleDecrement = () => {
    if (sharesToBuy > 0) {
      sharesToBuy = Number(sharesToBuy);
      sharesToBuy -= 1;
      setSharesToBuy(sharesToBuy);
      setGrossSum(sharesToBuy * data.quotes.c);
    }
  };

  return (
    <>
      {flash ? <Flash setFlash={setFlash} type={type} msg={msg} /> : null}
      <div className="buy-card">
        <p className="title">Shares</p>
        <div className="buy-card-row">
          <p>Total Invested </p>
          <p>{"$" + Math.round(data.user_data.total_invested * 100) / 100}</p>
        </div>
        <div className="buy-card-row">
          <p>Shares Owned</p>
          <p>{data.user_data.shares_owned}</p>
        </div>
        <div className="buy-card-row">
          <p>Gross Sum</p>
          <p>{"$" + grossSum}</p>
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
    </>
  );
};

export default Buy;
