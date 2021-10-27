import "../styles/DashboardTable.css";
import MarketsTableRow from "./MarketsTableRow";
import MarketsTableHeader from "./MarketsTableHeader";

const MarketsTable = ({ data }) => {
  return (
  <div class="container">
    <ul class="responsive-table">
      <MarketsTableHeader />
      {data.map((stock) => <MarketsTableRow stock={ stock }/>)}
    </ul>
  </div>
  );
};

export default MarketsTable;
