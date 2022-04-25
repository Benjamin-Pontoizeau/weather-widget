import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import MeteoApi from './MeteoApi';
import Form from '../Form';

function MeteoWidget({city, code}) {
    const [temperature, setTemperature] = useState(null);
    const [icons, setIcons] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        MeteoApi.getWeather(code)
        .then(response => {
            setTemperature(Math.round(response.data.main.temp));
            const weather = response.data.weather;
            setDescription(weather.map((i) => i.description[0].toUpperCase()+i.description.slice(1)));
            setIcons(weather.map((i) => i.icon));
        })
        .catch(error => console.error(error))
    }, []);

    return(
        <article className="meteo">
            <div className="meteo-container">
                <Form />
                <div className="meteo-infos">
                    <h3 className="meteo-day">Lundi 25 avril 2022</h3>
                    <p className="meteo-city">{city}</p>
                    <p className="meteo-code">{code}</p>
                    <p className="meteo-temperature">{temperature}°</p>
                    <p className="meteo-description">{description}</p>
                </div>

                
                <img className="meteo-icon"
                src={`https://openweathermap.org/img/wn/${icons}@2x.png`}
                />
            </div>
        </article>
    )
}

MeteoWidget.propTypes = {
    city: PropTypes.string.isRequired,
    code: PropTypes.number.isRequired,
}

export default MeteoWidget;