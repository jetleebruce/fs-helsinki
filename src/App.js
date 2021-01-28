import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/Countries";


const App = () => {
  //Application's effect
  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  });

  // Application's state
  const [countries, setCountries] = useState([]);
  const [newFilter, setNewFilter] = useState("");

  const handleFilterChange = (event) => setNewFilter(event.target.value);

  const showCountry = (event) => {
    event.preventDefault();
    setNewFilter(event.target.value);
  };

  return (
    <div>
      <Filter value={newFilter} onChange={handleFilterChange} />

      <Countries
        showCountry={showCountry}
        filter={newFilter}
        countries={countries}
      />
    </div>
  );
};

export default App;
