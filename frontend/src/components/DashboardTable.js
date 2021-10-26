import "../styles/DashboardTable.css";
import TableRow from "./TableRow";
import TableHeader from "./TableHeader";

const DashboardTable = () => {
  return (
<div class="container">
  <h2>Your Top Perfoming Stocks</h2>
  <ul class="responsive-table">
    <TableHeader />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
    <TableRow />
  </ul>
</div>
  );
};

export default DashboardTable;
