import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";
import TransactContent from "../components/TransactContent";

import "../styles/Dashboard.css";

function Transact() {
  return (
    <div className="dashboard">
      <div className="dashboard-headers">
        <DashboardHeader />
        <DashboardStockCarousel />
      </div>
      <DashboardNav />
      <TransactContent />
    </div>
  )
}

export default Transact;
