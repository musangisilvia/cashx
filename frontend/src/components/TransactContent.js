import DashBoardNewsList from "./DashboardNewsList";
import DashboardTable from "./DashboardTable";
import "../styles/DashboardContent.css";

function TransactContent() {
  return (
    <div className="dashboard-content">
      <DashboardTable />
      <DashBoardNewsList />
    </div>
  );
}

export default TransactContent;
