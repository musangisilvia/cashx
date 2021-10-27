
import "../styles/StockContentHeader.css";

const StockContentHeader = ({data}) => {


  return (
    <div className="stock-content-header">
        <p>{data.stock.name + "   (" + data.stock.symbol + ")"}</p>
        <div>
          <img src={data.stock.logo} alt="stock-logo" />
        </div>
    </div>

  );
} 

export default StockContentHeader;
