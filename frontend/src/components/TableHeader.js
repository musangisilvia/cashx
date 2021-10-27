import "../styles/DashboardTable.css";

const TableHeader = () => {
  return (
    <li className="table-header">
      <div className="col col-1">Symbol</div>
      <div className="col col-2">Company Name</div>
      <div className="col col-3">Shares</div>
      <div className="col col-4">Current Price</div>
      <div className="col col-5">Return Percentage</div>
      <div className="col col-6">Profit</div>
    </li>
  )
};

export default TableHeader;
