import "../styles/DashboardTable.css";

const TableHeader = () => {
  return (
    <li className="table-header">
      <div class="col col-1">Symbol</div>
      <div class="col col-2">Company Name</div>
      <div class="col col-3">Shares</div>
      <div class="col col-4">Current Price</div>
      <div class="col col-5">Return Percentage</div>
      <div class="col col-6">Profit</div>
    </li>
  )
};

export default TableHeader;
