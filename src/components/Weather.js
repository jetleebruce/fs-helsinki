import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({
    current: {
      temperature: null,
      weather_icons: [],
      wind_dir: null,
      wind_speed: null,
    },
  });

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${"6ecf767556980c5b2a543acc99d8323b"}&query=${capital}`
      )
      .then((response) => {
        console.log(response);
        setWeather(response.data);
      });
  }, [capital]);

  return (
    <div>
      <h3>Weather in {capital}</h3>
      <p>
        <b>Temperature:</b> {weather.current.temperature} Celsius
      </p>
      <img src={weather.current.weather_icons[0]} alt='icon' />
      <p>
        <b>Wind:</b> {weather.current.wind_speed} mph direction{" "}
        {weather.current.wind_dir}
      </p>
    </div>
  );
};

export default Weather;
