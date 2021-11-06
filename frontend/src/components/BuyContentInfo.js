import "../styles/StockContentInfo.css";
import Buy from "./Buy";


const BuyContentInfo = ({ data }) => {
  

  return (
    <div className="stock-content-info">
        
        <Buy data={ data}/>

        <div className="stock-info">
          <p className="title">Stock Information</p>
          <div className="info-container">
            <div className="info-side">
              <p>{ data.stock.symbol }</p>
              <p>{"$" + data.quotes.c}</p>
              <div className="info-trend">
                <div className="info-trend-arrow">
                  {data.quotes.d > 0 && 
                  <i class="uil uil-arrow-circle-up trend-up"></i>
                  }
                  {data.quotes.d <=0 &&
                  <i class="uil uil-arrow-circle-down trend-down"></i>
                  }
                </div>
                
                  {data.quotes.d > 0 && 
                  <div className="info-trend-nums trend-up">
                    <p>{data.quotes.d}</p>
                    <p>{data.quotes.dp + "%"}</p>
                  </div>
                }
                  {data.quotes.d <=0 &&
                  <div className="info-trend-nums trend-down">
                    <p>{data.quotes.d}</p>
                    <p>{data.quotes.dp + "%"}</p>
                  </div>
                }
              </div>
              <div className="owned">
                <p>OWNED</p>
                <p>{data.user_data.shares_owned}</p>
              </div>
            </div>
            <div className="info-main">
              <div className="info-row">
                <p>High</p>
                <p>{"$" + data.quotes.h}</p>
              </div>
              <div className="info-row">
                <p>Low</p>
                <p>{"$" + data.quotes.l}</p>
              </div>
              <div className="info-row">
                <p>Value</p>
                <p>{"$" + data.quotes.c }</p>
              </div>
              <div className="info-row">
                <p>Previous Close Price</p>
                <p>{"$" + data.quotes.pc}</p>
              </div>
              <div className="info-row">
                <p>Change</p>
                <p>{"$" + data.quotes.d}</p>
              </div>
              <div className="info-row">
                <p>% Change</p>
                <p>{data.quotes.dp}</p> 
              </div>
         
            </div>
          </div>
        </div>
      </div>
  );
}

export default BuyContentInfo;
