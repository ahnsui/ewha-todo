import { useState, useEffect } from "react";
import { getDate } from "../utils/getDate";
import axios from "axios";

const Header = () => {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`;
  const today = new Date();
  const [weather, setWeather] = useState(""); //weather는 이미지 url
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        const weatherIcon = response.data.weather[0].icon; //50d
        const weatherIConAdrs = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      
        setWeather(weatherIConAdrs);
      })
      .catch((err) => {
        console.log("발생한 오류: ", err);
      });
  },[URL]);

  return (
    <div className="flex justify-between mt-14">
      <div className="flex flex-col text-2xl font-semibold">
        <h1>{getDate(today)}</h1>
        <div className="flex items-center">
          <h1>오늘의 날씨</h1>
          <h1>
            <img alt="weatherIcon" src={weather} className="w-14 h-14" />
          </h1>
        </div>
      </div>
      <img className="w-16" alt="rocket" src="/Emoji.png" />
    </div>
  );
};

export default Header;