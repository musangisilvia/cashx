import { Link } from "react-router-dom";
import "../styles/DashboardTable.css";

const MarketsTableRow = ({stock}) => {
  
  const stock_url = "/stocks/" + stock.symbol;

  return (
    <Link to={stock_url}>
    <li className="markets-table-row">
      <div className="col col-1" data-label="Symbol">{stock.symbol}</div>
      <div className="col col-2" data-label="Company Name">{stock.companyName}</div>
      <div className="col col-3" data-label="Current Price">{"$" + stock.latestPrice}</div>
      <div className="col col-4" data-label="Price Movement">{stock.change}</div>
      {stock.changePercent > 0 && 
        <div className="col col-5 row-up" data-label="Average Change">
          <i class="uil uil-angle-up"></i>
          {stock.changePercent + "%"}
        </div>
      }
      {stock.changePercent <= 0 && 
        <div className="col col-5 row-down" data-label="Average Change">
          <i class="uil uil-angle-down"></i>
          {stock.changePercent + "%"}
        </div>
      }
    </li>
    </Link>
  )
}

export default MarketsTableRow;
