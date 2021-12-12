// import React from 'react'
// import { useTheme } from '../global/WeatherData';
// import { useContext, useState, useEffect } from 'react';
// import { ThemeContext } from '../global/WeatherData';


// const CallWeather = () => {
//     const { weather, setWeather } = useTheme({
//         name: '',
//         lon: '',
//         lang: ''
//     });


//     useEffect(() => {
//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=37.00167&lon=35.32889&exclude=current,hourly,minutely,alerts&units=metric&appid=${key}`)
//         .then((weatherData) => {
//             return weatherData.json()
//         })
//         .then((data) => {
//             console.log(JSON.stringify(data));
//         })
//         .catch((err) => {
//             console.error(`err: ${err}`);
//         }); 
//     }, [setWeather])

//     // return <>
//     //     <code>
//     //         { weather.location }
//     //     </code>
//     // </>
//     // return weather.name;
//     return <></>
// }

// export default CallWeather;