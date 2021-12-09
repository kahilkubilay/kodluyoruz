import React from 'react'
import './weatherStyle.css';
import { useTheme } from '../global/WeatherData';
import { useContext } from 'react';

function Weather() {
    const { weather } = useTheme();
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

    console.log(weather);

    return (
        <ul>
          {
            days.map((day, index) => {
              return <li key={index}>
                <div>{ day }</div>
                <div>15 dec</div>
              </li>
              })
          }
        </ul>
    )
}

export default Weather
