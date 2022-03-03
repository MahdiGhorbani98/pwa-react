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
        <div className="country">
          <span>{weather.name}</span>
          <sup>{weather.sys.country}</sup>
        </div>
      )}
    </div>
  );
}

export default App;
