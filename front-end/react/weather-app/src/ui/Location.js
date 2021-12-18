import React from 'react'
import './LocationStyle.css'
import { Cities } from '../global/CitiesOfTurkey'
import { useTheme } from '../global/WeatherData'
import { Logo } from '../components/SetIcon';

function Location() {
    const { setWeather } = useTheme({
        name: '',
        lon: '',
        lang: ''
    })

    const data = (Cities || []).map((city, index) => {
        let stringData = {
            name: city.name, 
            lon: city.longitude, 
            lat: city.latitude
        }

        let datas = <option value={JSON.stringify(stringData)} key={city.plate || index}>{city.name}</option>;
        
        return datas
    })

    const changeLocation = (e) => {
        let location = JSON.parse(e.target.value);

        setWeather({
            name: location.name,
            lon: location.lat,
            lang: location.lon
        })
    }

    return (
        <div className="location">
                <div className="title">Weekly Weather Forecast <img src={ Logo } alt="weekly weather forecast logo" 
                    className="logo"/></div>

                <select name="cities" id="citiesOfTurkey" onChange={changeLocation}>
                    { data }
                </select>
        </div>
    )
}

export default Location
