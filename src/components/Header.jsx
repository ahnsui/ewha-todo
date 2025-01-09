import { useState, useEffect } from "react";
import { getDate } from "../utils/getDate";
import axios from "axios";
const Header = () => {
  const today = new Date();
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}`;
  const [weather, setWeather] = useState("");

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        const weatherIcon = response.data.weather[0].icon;
        const weatherIconAdrs = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

        setWeather(weatherIconAdrs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [url]);

  return (
    <div className="flex justify-between mt-14">
      <div className="flex-col text-2xl font-semibold">
        <h1>{getDate(today)}</h1>
        <div className="flex items-center">
          <h1>오늘의 날씨</h1>
          <img alt="Weather Icon" src={weather} className="w-14 h-14" />
        </div>
      </div>
      <div className="w-16">
        <img alt="rocket" src="/Emoji.png" />
      </div>
    </div>
  );
};

export default Header;
