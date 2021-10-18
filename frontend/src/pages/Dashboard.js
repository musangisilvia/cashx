import DashboardHeader from "../components/DashboardHeader";
import DashboardNav from "../components/DashboardNav";
import DashboardStockCarousel from "../components/DashboardStockCarousel";
import { logout } from "../helpers/auth";

function Dashboard() {
  return (
    <>
      <DashboardHeader />
      <DashboardStockCarousel />
      <DashboardNav />
      <button onClick={ () => {logout()} }>Log Out </button>
    </>
  )
}

export default Dashboard;
