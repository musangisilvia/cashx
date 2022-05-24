import { useState } from "react";
import { authFetch } from "../helpers/auth"
import { useHistory } from 'react-router-dom';

import Flash from "./Flash";


import "../styles/Sell.css";


const Sell = ({ data }) => {

  const history = useHistory();

  let [sharesToSell, setSharesToSell] = useState(0);
  const [flash, setFlash] = useState(null);
  const [type, setType] = useState("");
  const [msg, setMsg] = useState("");
  const [grossSum, setGrossSum] = useState(0);


  const handleSharesToSellChange = (e) => {
    setSharesToSell(e.target.value);

    setGrossSum(e.target.value * data.quotes.c);
  }

  const handleSell = () => {

    if (sharesToSell < 0 ){
      setFlash(true);
      setType('error');
      setMsg('Invalid number of shares');
    }

    if (sharesToSell > data.user_data.shares_owned){
      setFlash(true);
      setType('error');
      setMsg("You don't own that number of shares");
    }

    if (sharesToSell > 0 && sharesToSell <= data.user_data.shares_owned){

      const payload = {
        'current_price': data.quotes.c,
        'shares_to_sell': sharesToSell,
        'company_name': data.stock.name
      }

      const symbol = data.stock.symbol 

      authFetch('api/stocks/' + symbol + '/sell', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      .then(response => {
        if (response.status !== 201){
          setFlash(true);
          setType("error");
        }
        else{
          history.push("/stocks/" + data.stock.symbol);
        }
        return response.json()

      })
      .then(data => {
        setMsg(data.error);
      })
      .catch((error) => {
        setFlash(true);
        setType("error");
        setMsg(error)

        // console.error('Error:', error);
      });
    }
  }

  const handleIncrement = () => {
    if (sharesToSell < data.user_data.shares_owned){
      sharesToSell = Number(sharesToSell);
      sharesToSell += 1;
      setSharesToSell(sharesToSell)
      setGrossSum(sharesToSell * data.quotes.c);  
    }
    

  }

   const handleDecrement = () => {
    if (sharesToSell> 0) {
      sharesToSell = Number(sharesToSell);
      sharesToSell -= 1;
      setSharesToSell(sharesToSell);
      setGrossSum(sharesToSell * data.quotes.c);
    }

  }

  return (
    <>
    {
      flash
      ? <Flash setFlash={setFlash} type={type} msg={msg}/>
      : null
    }
    <div className="sell-card">
    <p className="title">Shares</p>
      <div className="sell-card-row">
        <p>Total Invested </p>
        <p>{'$'+ Math.round(data.user_data.total_invested *100) / 100}</p>

      </div>
      <div className="sell-card-row">
        <p>Shares Owned</p>
        <p>{data.user_data.shares_owned}</p>
      </div>
      <div className="sell-card-row">
        <p>Gross Sum</p>
        <p>{'$'+grossSum}</p>
      </div>
                
      <div className="sell-card-row">
        <div className="sell-input">
          <div className="sell-minus" onClick={handleDecrement}>
            <i class="uil uil-minus"></i>
          </div>
          <input
            type="number"
            min="0"
            max={data.user_data.shares_owned}

            value={sharesToSell}
            onChange={handleSharesToSellChange}
          />
          <div className="sell-plus" onClick={handleIncrement}>
            <i class="uil uil-plus"></i>
          </div>
        </div>

        <div className="sell-btn" onClick={handleSell}>
        <p>Sell</p>
        </div>

      </div>

    </div>
    </>
  );
}

export default Sell;
