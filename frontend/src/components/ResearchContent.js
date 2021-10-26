import DashBoardNewsList from "./DashboardNewsList";
import DashboardTable from "./DashboardTable";
import "../styles/DashboardContent.css";

function ResearchContent() {
  return (
    <div className="dashboard-content">
      <DashboardTable />
      <DashBoardNewsList />
    </div>
  );
}

export default ResearchContent;
