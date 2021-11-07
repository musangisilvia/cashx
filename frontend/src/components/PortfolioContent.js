import useAuthFetch from "../helpers/useAuthFetch";
//import Balance from "./Balance";
import PortfolioTable from "./PortfolioTable";

import "../styles/PortfolioContent.css"

function PortfolioContent() {

  const {data, isPending, error} = useAuthFetch('https://cashx.tech/api/portfolio');
  // console.log(data);


  return (
    <div className="portfolio-content">
      <h2>Portfolio</h2>

      {isPending && <div style={{ textAlign: "center" }}>Loading...</div>}
      {error && <div style={{textAlign: "center" }}> {error} </div>}
      {data && <PortfolioTable data={data}/>}
    </div>
  );
}

export default PortfolioContent;
