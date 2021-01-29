import React from "react";
import Weather from "./Weather";

const Countries = ({ handleClick, countries }) => {
  console.log(countries);
  if (countries.length > 10) {
    return <div>Too much coinsidence</div>;
  }
  if (countries.length === 1) {
    const { name, capital, population, languages, flag } = countries[0];

    return (
      <div>
        <h3>{name}</h3>
        <p>Capital: {capital}</p>
        <p>Population: {population}</p>
        <p>Languages:</p>
        <ul>
          {languages.map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <img src={flag} alt={name} width='200px' />
        <Weather capital={capital} />
      </div>
    );
  }

  return (
    <div>
      {countries.map(({ name }) => (
        <>
          <p key={name}>{name}</p>
          <button onClick={handleClick} data-name={name}>
            show
          </button>{" "}
        </>
      ))}
    </div>
  );
};

export default Countries;
