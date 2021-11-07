import { Link } from "react-router-dom";
import "../styles/DashboardTable.css";

const TableRow = ({stock}) => {

  const link_url = "stocks/" + stock.symbol


  return (
    <Link to={link_url}>
    <li className="table-row">
      <div className="col col-1" data-label="Symbol">{stock.symbol}</div>
      <div className="col col-2" data-label="Company Name">{stock.company_name}</div>
      <div className="col col-3" data-label="Shares">{stock.shares}</div>
      <div className="col col-4" data-label="Current Price">{'$'+stock.current_price}</div>

      {stock.percent_change > 0 && 
        <div className="col col-5 row-up" data-label="Average Change">
          <i class="uil uil-angle-up"></i>
          {stock.percent_change + "%"}
        </div>
      }
      {stock.percent_change <= 0 && 
        <div className="col col-5 row-down" data-label="Average Change">
          <i class="uil uil-angle-down"></i>
          {stock.percent_change + "%"}
        </div>
      }

      <div className="col col-6" data-label="Profit">{stock.change}</div>
    </li>
    </Link>
  )
}

export default TableRow;
