import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";
import ResearchContent from "../components/ResearchContent";

import "../styles/Dashboard.css";

function Research() {
  return (
    <div className="dashboard">
      <div className="dashboard-headers">
        <DashboardHeader />
        <DashboardStockCarousel />
      </div>
      <DashboardNav />
      <ResearchContent />
    </div>
  )
}

export default Research;
