import "../styles/MarketsContent.css";
import Tabs from "./Tabs";
import Search from "./Search";

function MarketsContent() {
  return (
    <div className="markets-content">
      <h3>Markets</h3>
      <Search />
      <Tabs />
    </div>
  );
}

export default MarketsContent;
