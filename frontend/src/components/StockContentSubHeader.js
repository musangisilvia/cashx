import { useHistory } from "react-router-dom";
import "../styles/StockContentSubHeader.css";

const StockContentSubHeader = ({ data }) => {

  const history = useHistory();

  const buy_url = "/stocks/" + data.stock.symbol + "/buy"
  const sell_url = "/stocks/" + data.stock.symbol + "/sell"

  return (
     <div className="stock-content-subheader">
        <p className="company-brief">
          {data.stock.description}
        </p>
        <div className="stock-content-buttons">
          {data.user_data.shares_owned > 0
            ?
            <div className="sell" onClick={() => history.push(sell_url)}>
              <p>Sell</p>
            </div>
            :
            <div className="sell" style={{ visibility: 'hidden'}} onClick={() => history.push(sell_url)}>
              <p>Sell</p>
            </div>
          }
          <div className="buy" onClick={() => history.push(buy_url)}>
            <p>Buy</p>
          </div>

        </div>
      </div>  
  );
};

export default StockContentSubHeader;
