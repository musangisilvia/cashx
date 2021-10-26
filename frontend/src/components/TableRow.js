import { Link } from "react-router-dom";
import "../styles/DashboardTable.css";

const TableRow = () => {
  return (
    <Link to="stocks/aapl">
    <li className="table-row">
      <div className="col col-1" data-label="Job Id">AAPL</div>
      <div className="col col-2" data-label="Customer Name">Apple Inc.</div>
      <div className="col col-3" data-label="Amount">400</div>
      <div className="col col-4" data-label="Payment Status">$1200</div>
      <div className="col col-5" data-label="Tect">+20%</div>
      <div className="col col-6" data-label="Tect">200,000</div>
    </li>
    </Link>
  )
}

export default TableRow;
