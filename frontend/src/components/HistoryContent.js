import HistoryTable from "./HistoryTable";
import HistorySearch from "./HistorySearch";
import useAuthFetch from "../helpers/useAuthFetch";

import "../styles/HistoryContent.css";

function HistoryContent() {

  const {data, isPending, error} = useAuthFetch('http://localhost:5000/api/history');

  return (
    <div className="history-content">
      <h2>Transactions History</h2>
    {/* History search is not working right now will work on it later*/}
      <HistorySearch />
      {isPending && <div style={{ textAlign: "center" }}>Loading...</div>}
      {error && <div style={{textAlign: "center" }}> {error} </div>}
      {data && <HistoryTable data={data}/>}

    </div>
  );
}

export default HistoryContent;
