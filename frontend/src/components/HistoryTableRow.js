import { Link } from "react-router-dom";
import { format } from "date-fns";
import "../styles/DashboardTable.css";

const MarketsTableRow = ({transaction}) => {
  

  return (
    <li className="markets-table-row">
      <div className="col col-1" data-label="Symbol">{transaction.symbol}</div>
      <div className="col col-2" data-label="Company Name">{transaction.company_name}</div>
      <div className="col col-3" data-label="Transaction Amount">{"$" + transaction.amount}</div>
      <div className="col col-4" data-label="Transaction Type">{transaction.type}</div>
      <div className="col col-5" data-label="Transaction Date">
      {
        format(new Date(transaction.date), 'MM/dd/yyyy')
      }
      </div>
    </li>
  )
}

export default MarketsTableRow;
