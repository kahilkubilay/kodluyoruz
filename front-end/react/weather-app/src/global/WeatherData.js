import { createContext, useState, useEffect, useContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [weather, setWeather] = useState({
        location: 'Ankara',
        deg: '1deg'
    });

    const data = {weather, setWeather};

    return <ThemeContext.Provider value={ data }> 
        { children }
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext);