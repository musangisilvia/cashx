import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";
import AnalysisContent from "../components/AnalysisContent";

import "../styles/Dashboard.css";

function Analysis() {
  return (
    <div className="dashboard">
      <div className="dashboard-headers">
        <DashboardHeader />
        <DashboardStockCarousel />
      </div>
      <DashboardNav />
      <AnalysisContent />
    </div>
  )
}

export default Analysis;
