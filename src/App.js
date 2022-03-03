import { useState } from "react";
import "./App.css";
import { fetchWeather } from "./api/FetchWeather";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      console.log(data);
      setQuery("");
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        className="search"
        placeholder="Search ..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={search}
      />
      {weather.main && (
        <div className="container">
          <div className="country">
            <span>{weather.name}</span>
            <sup>{weather.sys.country}</sup>
          </div>

          <div className="temp">
            <span>{Math.round(weather.main.temp)}</span>
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city-icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <span>{weather.weather[0].description}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
