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

//     // key-list:: 0650a12d4ab140b28d0215630210912 8bf0804f48c90c059ffee4d9bf414e23 6969c4badf0c957576a52d647746cb7a
//     // const key = '826b82528457cde37c96c39e1602baec';
//     const key = '';

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