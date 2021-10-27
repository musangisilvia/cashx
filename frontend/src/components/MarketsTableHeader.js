import "../styles/DashboardTable.css";

const MarketsTableHeader = () => {
  return (
    <li className="markets-table-header">
      <div className="col col-1">Symbol</div>
      <div className="col col-2">Company Name</div>
      <div className="col col-3">Current Price</div>
      <div className="col col-4">Price Movement</div>
      <div className="col col-5">Average Change</div>
    </li>
  )
};

export default MarketsTableHeader;
