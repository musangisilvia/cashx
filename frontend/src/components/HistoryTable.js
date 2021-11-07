import "../styles/DashboardTable.css";
import HistoryTableRow from "./HistoryTableRow";
import HistoryTableHeader from "./HistoryTableHeader";

const HistoryTable = ({ data }) => {
  return (
  <div class="container">
    <ul class="responsive-table">
      <HistoryTableHeader />
      {data.map((transaction) => <HistoryTableRow transaction={ transaction }/>)}
    </ul>
  </div>
  );
};

export default HistoryTable;
