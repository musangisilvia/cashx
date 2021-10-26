import DashBoardNewsList from "./DashboardNewsList";
import DashboardTable from "./DashboardTable";
import "../styles/DashboardContent.css";

function AnalysisContent() {
  return (
    <div className="dashboard-content">
      <DashboardTable />
      <DashBoardNewsList />
    </div>
  );
}

export default AnalysisContent;
