import MarketsTable from "./MarketsTable";

const ActiveTab = ({data, isPending, error}) => {
  return (
    <div className="most-active-tab">
      {isPending && <div style={{ textAlign: "center" }}>Loading...</div>}
      {error && <div style={{textAlign: "center" }}> {error} </div>}
      {data && <MarketsTable data={data.active} />}
    </div>
  );
};

export default ActiveTab;
