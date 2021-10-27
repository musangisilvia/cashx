import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";
import MarketsContent from "../components/MarketsContent";

import "../styles/Dashboard.css";

function MarketsPage() {
  return (
    <div className="dashboard">
      <div className="dashboard-headers">
        <DashboardHeader />
        <DashboardStockCarousel />
      </div>
      <DashboardNav />
      <MarketsContent />
    </div>
  )
}

export default MarketsPage;
