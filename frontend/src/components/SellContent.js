import {useParams} from "react-router";
import "../styles/StockContent.css"
import StockContentHeader from "./StockContentHeader";
import StockContentInfo from "./StockContentInfo";

import useAuthFetch from "../helpers/useAuthFetch";

const SellContent = () => {
  
  const { symbol } = useParams();
  const {data , isPending, error} = useAuthFetch("/api/stocks/"+symbol)
  console.log(data);

  return (
    <div className="stock-content">
      {isPending && <div style={{ textAlign: "center" }}>Loading...</div>}
      {error && <div style={{textAlign: "center" }}> {error} </div>}
      { data &&
        <>
          <StockContentHeader data={data} />
          <StockContentInfo data={data}/>
        </>
      }
    </div>
  )
}

export default SellContent;
