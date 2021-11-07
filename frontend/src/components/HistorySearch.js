import { useState } from "react";


import "../styles/Search.css";


const HistorySearch = () => {

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  }
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      
    }
  }

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInputChange}
          value={searchTerm}
          placeholder="Search for a transaction  i.e APPL"
        />
        <div onClick={handleSubmit}>
          <i class="uil uil-search"></i>
        </div>

      </form>
    </div>
  );
}

export default HistorySearch;
