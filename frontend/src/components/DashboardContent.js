import DashBoardNewsList from "./DashboardNewsList";
import PortfolioTable from "./PortfolioTable";
import useAuthFetch from "../helpers/useAuthFetch";
import "../styles/DashboardContent.css";

function DashboardContent() {
  const { data, isPending, error } = useAuthFetch("api/portfolio/7");

  return (
    <div className="dashboard-content">
      {isPending && <div style={{ textAlign: "center" }}>Loading...</div>}
      {error && <div style={{ textAlign: "center" }}> {error} </div>}
      {data && <PortfolioTable data={data} />}
      <DashBoardNewsList />
    </div>
  );
}

export default DashboardContent;
