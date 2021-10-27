import { useState } from "react";
import SearchResult from "./SearchResult";


import "../styles/Search.css";


const Search = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleInputChange = (e) => {
    setShowSearch(false);
    setSearchTerm(e.target.value);
  }
  
//  const {data, isPending, error} = useFetch("http://localhost:5000/api/search_stock/")
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setShowSearch(true);
      console.log("Searching for ", searchTerm);
    }
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          value={searchTerm}
          placeholder="Search for a stock  i.e Apple"
        />
        <div onClick={handleSubmit}>
          <i class="uil uil-search"></i>
        </div>

      </form>
      {showSearch && <SearchResult searchTerm={searchTerm} />}
    </div>
  );
}

export default Search;
