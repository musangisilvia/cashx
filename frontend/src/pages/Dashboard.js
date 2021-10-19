import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div class="dashboard">
      <DashboardHeader />
      <DashboardStockCarousel />
      <DashboardNav />
    </div>
  )
}

export default Dashboard;
