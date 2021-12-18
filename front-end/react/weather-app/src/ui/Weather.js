import React, { useState, useEffect } from 'react'
import './weatherStyle.css';
import { useTheme } from '../global/WeatherData';
import { Icons } from '../components/SetIcon';

function Weather() {
    const { weather } = useTheme({
      name: '',
      lon: '',
      lang: ''
    });

    const [lon, setLon] = useState(weather.lon);
    const [lang, setLang] = useState(weather.lang);
    const [data, setData] = useState([]);
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const todayDate = new Date().getDay();
    const key = process.env.REACT_APP_API_KEY;
    let todayIcon = '';
    let todayDeg = '';

    useEffect(() => {
        setLon(weather.lon)
        setLang(weather.lang)
    }, [weather])
    
    useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLon(position.coords.latitude);
          setLang(position.coords.longitude);
        });
  
        await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lon}&lon=${lang}&exclude=current,
        hourly,minutely,alerts&units=metric&appid=${key}`)
        .then(res => res.json())
        .then(result => {
          let weatherResponse = (result || {}).daily || []
          weatherResponse.pop()
          setData(weatherResponse)
        }).catch((err) => {
          console.error(`please check the request::: ${err}`);
        })
      }
      fetchData();
    }, [lang, lon, key])

    return (
        <>
          <ul className='daily'>
            {
              data.map((daily, index) => {
                let description = ((daily.weather || [])[0] || {}).description || ''
                let icon = Icons[description.replace(/\s/g, '_')]
                let deg = parseInt((daily.temp || {}).day || 0)

                if(new Date(daily.dt * 1000).getDay() === todayDate) {
                  todayIcon = icon
                  todayDeg = deg
                }

                return <li key={index}>
                  <img src={ icon } alt="test" />
                  <div className='day'>{ days[new Date(daily.dt * 1000).getDay()] }</div>
                  <div className='deg'>{ deg } &#8451;</div>
                  <div className='description'>{ description }</div>
                </li>
                })
            }
          </ul>

          <div className='today'>
            <div className='today-info-capsule'>
            <h6 className='today-info'>{ (weather.name || '')[0].toUpperCase() + (weather.name || '').slice(1)} Today
              </h6>
              <div className='today-day'>{ days[todayDate] }</div>
              <div className='today-deg'>{ todayDeg } &#8451;</div>
            </div>
            <img src={ todayIcon } alt="test" />
          </div>
        </>
    )
}

export default Weather
