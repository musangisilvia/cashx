import MarketsTable from "./MarketsTable";
const LosersTab = ({data, isPending, error}) => {
  return (
    <div className="losers-tab">
      {isPending && <div style={{ textAlign: "center" }}>Loading...</div>}
      {error && <div style={{textAlign: "center" }}> {error} </div>}
      {data && <MarketsTable data={data.losers} />}
    </div>
  );
};

export default LosersTab;
