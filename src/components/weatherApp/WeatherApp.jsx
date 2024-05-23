import React, { useState } from "react";
import "./WeatherApp.css";
import searchIcon from "../../assets/search.png";
import clearIcon from "../../assets/clear.png";
import cloudIcon from "../../assets/cloud.png";
import drizzleIcon from "../../assets/drizzle.png";
import humidityIcon from "../../assets/humidity.png";
import rainIcon from "../../assets/rain.png";
import snowIcon from "../../assets/snow.png";
import windIcon from "../../assets/wind.png";

const WeatherApp = () => {
  let apiKey = "e199c5e9e1bba1936d15c23033eeb48f";
  const [weatherIcon, setWeatherIcon] = useState(clearIcon);

  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${apiKey}`;
    let response = await fetch(url);
    let data = await response.json();
    const humidity = document.getElementsByClassName("humidityPercent");
    const wind = document.getElementsByClassName("windRate");
    const temperature = document.getElementsByClassName("weatherTemp");
    const location = document.getElementsByClassName("weatherLocation");

    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = data.wind.speed + "KM/Hr";
    temperature[0].innerHTML = data.main.temp + "°C";
    location[0].innerHTML = data.name;

    if (data.weather[0].icon === "01d" || data.weather[0].icon === "01n") {
      setWeatherIcon(clearIcon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWeatherIcon(cloudIcon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWeatherIcon(drizzleIcon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWeatherIcon(drizzleIcon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWeatherIcon(rainIcon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWeatherIcon(rainIcon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWeatherIcon(snowIcon);
    } else {
      setWeatherIcon(clearIcon);
    }
  };
  return (
    <div className="container">
    <h1 className='title'>Kshitiz Rajan</h1>
    <form onSubmit={(e) =>{e.preventDefault();search()}} >
      <div className="topBar">
          <input
            type="text"
            className="cityInput"
            placeholder="Enter City Name"
          />
        
          <div type="button" className="searchIcon" onClick={search}>
            <img src={searchIcon} alt="" />
          </div>
      </div>
      </form>

      <div className="weatherImage">
        <img src={weatherIcon} alt="" />
      </div>
      <div className="weatherTemp">24 C</div>
      <div className="weatherLocation">Kathmandu</div>
      <div className="dataContainer">
        <div className="element">
          <img src={humidityIcon} alt="" className="icon" />
          <div className="data">
            <div className="humidityPercent">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={windIcon} alt="" className="icon" />
          <div className="data">
            <div className="windRate">18 km/hr</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
