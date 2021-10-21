import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";
import DashboardContent from "../components/DashboardContent";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div class="dashboard">
      <DashboardHeader />
      <DashboardStockCarousel />
      <DashboardNav />
      <DashboardContent />
    </div>
  )
}

export default Dashboard;
