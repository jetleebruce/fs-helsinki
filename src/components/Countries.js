import React from "react";
import Country from "./Country";

const Countries = ({ countries, filter, showCountry }) => {
  console.log(countries);
  const countriesFiltered = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  if (countriesFiltered.length === countries.length) {
    return <div>Empty</div>;
  } else if (countriesFiltered.length === 1) {
    return countriesFiltered.map((country) => (
      <div key={country.name}>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
        <h2>languages</h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <div>
          <img
            src={country.flag}
            alt={`Flag of ${country.name}`}
            height='60'
            width='60'
          />
        </div>
      </div>
    ));
  } else if (countriesFiltered.length <= 10) {
    return countriesFiltered.map((country) => (
      <div key={country.name}>
        <Country name={country.name} />
        <button type='button' value={country.name} onClick={showCountry}>
          show
        </button>
        <br />
      </div>
    ));
  } else {
    return <div>Too many matches, specify another filter</div>;
  }
};

export default Countries;
