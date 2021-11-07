import PortfolioTableRow from "./PortfolioTableRow";
import PortfolioTableHeader from "./PortfolioTableHeader";

const PortfolioTable = ({data}) => {
  return (
    <div className="container">
      <ul className="responsive-table">
        <PortfolioTableHeader />

        {
          data.length === 0 && 
          <>
          <p style={{textAlign:'center'}}>Your dont own any stock yet</p>
          <p style={{textAlign:'center'}}>Visit the Markets to start buying some stock</p>
          </>
        }
        {data.map((stock) => <PortfolioTableRow stock={stock} />)}

      </ul>
    </div>
  );
}

export default PortfolioTable;