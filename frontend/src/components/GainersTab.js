import MarketsTable from "./MarketsTable";

const GainersTab = ({data, isPending, error}) => {
  return (
    <div className="gainers-tab">
      {isPending && <div style={{textAlign: "center" }}>Loading...</div>}
      {error && <div style={{textAlign: "center"}}> {error} </div>}
      {data && <MarketsTable data={data.gainers} />}
    </div>
  );
};

export default GainersTab;
