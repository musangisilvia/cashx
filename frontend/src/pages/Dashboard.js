import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";
import DashboardContent from "../components/DashboardContent";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-headers">
        <DashboardHeader />
        <DashboardStockCarousel />
      </div>
      <DashboardNav />
      <DashboardContent />
    </div>
  )
}

export default Dashboard;
