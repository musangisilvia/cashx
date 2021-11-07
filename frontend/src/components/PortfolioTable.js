import PortfolioTableRow from "./PortfolioTableRow";
import PortfolioTableHeader from "./PortfolioTableHeader";

const PortfolioTable = ({data}) => {
  return (
    <div className="container">
      <ul className="responsive-table">
        <PortfolioTableHeader />

        {data.map((stock) => <PortfolioTableRow stock={stock} />)}

      </ul>
    </div>
  );
}

export default PortfolioTable;