import React, { useState, useEffect } from "react";
import finnhub from "../apis/finnhub";

const Autocomplete = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const handleDropDown = () => {
    const dropDownClass = search ? "show" : null;
    return (
      <ul
        className={`dropdown-menu ${dropDownClass}`}
        style={{ height: "500px", overflow: "scroll", cursor: "pointer" }}
      >
        {results.map((item) => {
          return (
            <li key={item.symbol} className="dropdown-item">
              {item.description} ({item.symbol})
            </li>
          );
        })}
      </ul>
    );
  };
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await finnhub.get("/search", {
          params: {
            q: search,
          },
        });
        console.log(response);
        if (isMounted) {
          setResults(response.data.result);
        }
      } catch (err) {
        console.log("Error: " + err);
      }
    };
    if (search.length > 0) {
      fetchData();
    } else {
      setResults([]);
    }
    return () => (isMounted = false);
  }, [search]);

  return (
    <div className="w-50 p-5 rounded mx-auto">
      <div className="form-floating dropdown">
        <input
          type="text"
          style={{ backgroundColor: "rgba(145,158,171,0.4" }}
          id="search"
          className="form-control"
          placeholder="Search ..."
          autoComplete="off"
          value={search}
          onChange={handleSearch}
        />
        <label htmlFor="search"> Search</label>
        {handleDropDown()}
      </div>
    </div>
  );
};

export default Autocomplete;
