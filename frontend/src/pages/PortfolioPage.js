import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";
import PortfolioContent from "../components/PortfolioContent";

import "../styles/Dashboard.css";

function PortfolioPage() {
  return (
    <div className="dashboard">
      <div className="dashboard-headers">
        <DashboardHeader />
        <DashboardStockCarousel />
      </div>
      <DashboardNav />
      <PortfolioContent />
    </div>
  )
}

export default PortfolioPage;
