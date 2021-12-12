import React from 'react'
import './weatherStyle.css';
import { useTheme } from '../global/WeatherData';
import { useContext } from 'react';
require('dotenv').config();

function Weather() {
    const { weather, setWeather } = useTheme({
      name: '',
      lon: '',
      lang: ''
    });

    // console.log('fck here::');
    // console.log(process.env.REACT_APP_API_KEY);

    
    const key = '';
    let location = weather;

    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.lon}&lon=${location.lang}&exclude=current,
      hourly,minutely,alerts&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then((weatherData) => {
          return weatherData.json()
      })
      .then((data) => {
          return JSON.stringify(data)
      })
      .catch((err) => {
          console.error(`err: ${err}`);
      }); 

    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    return (
        <ul>
          {
            days.map((day, index) => {
              return <li key={index}>
                <div>{ day + ' ' + weather.name}</div>
                <div>15 dec</div>
              </li>
              })
          }
        </ul>
    )
}

export default Weather
