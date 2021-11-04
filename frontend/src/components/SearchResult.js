import useFetch from "../helpers/useFetch";
import {Link} from "react-router-dom";

const SearchResult = ({searchTerm}) => {
  const endpoint_url = "https://cashx.tech/api/search_stock/"+searchTerm;
  const {data, isPending, error} = useFetch(endpoint_url);


  return (
    <div className="search-result">
      {error && <div style={{textAlign: "center", padding: 10}}>{error}</div>}
      {isPending && <div style={{textAlign: "center", padding: 10}}> Searching... </div>}
      {data && <SearchResultItem result={data} />}
    </div>
  )

}

export default SearchResult;


const SearchResultItem = ({result}) => {

  const stock_url = result ? "/stocks/"+result.symbol : "/#"; 

  return (
    <>
      <Link to={stock_url}><p>{result.description}</p></Link>
      <Link to={stock_url}><p>{result.symbol}</p></Link>
    </>
  )
}
