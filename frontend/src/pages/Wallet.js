import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";
import WalletContent from "../components/WalletContent";

import "../styles/Dashboard.css";

function Wallet() {
  return (
    <div className="dashboard">
      <div className="dashboard-headers">
        <DashboardHeader />
        <DashboardStockCarousel />
      </div>
      <DashboardNav />
      <WalletContent />
    </div>
  )
}

export default Wallet;
