// import { createContext, useState, useEffect, useContext } from "react"

// export const SetWeather = createContext()

// export const WeatherProvider = ({ children }) => {
//     const [weather, setWeather] = useState({
//         'location': 'ankara',
//         'deg': ''
//     });

//     // useEffect(() => {
//         // localStorage.setItem('weather', weather);
//     // }, [weather])

//     const data = {weather, setWeather}

//     return <WeatherProvider.Provider values={ data }>
//         { children }
//     </WeatherProvider.Provider>
// }

// export const UseWeather = () => useContext(SetWeather);