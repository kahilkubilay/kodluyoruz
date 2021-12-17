import { createContext, useState, useContext } from "react"

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [weather, setWeather] = useState({
        name: 'Ankara',
        lon: '39.92553',
        lang: '32.86628'
    })

    const data = {weather, setWeather}

    return <ThemeContext.Provider value={ data }> 
        { children }
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)