import React from 'react';

import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import MeteoApi from './MeteoApi';
import Widget from '../Widget';
import Header from '../Header';

function App() {
    const [data, setData] = useState([]);
    const [temperature, setTemperature] = useState('');
    const [city, setCity] = useState('');
    const [icons, setIcons] = useState('');
    const [pressure, setPressure] = useState('');
    const [humidity, setHumidity] = useState('');
    const [wind, setWind] = useState('');
    const [description, setDescription] = useState('');
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('paris');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const setSearchQuery = (e) => {
        // reset();
        e.preventDefault();
        setQuery(search);
        setSearch('')
        setError(false)
      };

    const loadData =  () => {
        setIsLoading(true);

        MeteoApi.getWeather(query)
        .then(response => {
            setTemperature(Math.round(response.data.main.temp));
            const weather = response.data.weather;
            setDescription(weather.map((i) => i.description[0].toUpperCase()+i.description.slice(1)));
            setIcons(weather.map((i) => i.icon));
            setCity([response.data.name +', '+ response.data.sys.country]);
            setPressure(response.data.main.pressure)
            setHumidity(response.data.main.humidity)
            setWind(response.data.wind.speed)
            setData(response.data)
            setIsLoading(false);
        })
            
        .catch (() => {
            setIsLoading(false);
            setError(true);
          })
    };

    useEffect(() => {
        loadData();
    }, [query])

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    return(        
    <div className="app">
        {/* <Header /> */}
        <Widget
        isLoading={isLoading}
        error={error}
        city={city}
        temperature={temperature}
        description={description}
        icons={icons}
        pressure={pressure}
        humidity={humidity}
        wind={wind}
        inputValue={search}
        handleChange={handleChange}
        handleSubmit={setSearchQuery}
        // data={data}  
        />
    </div>
    )
}

export default App;