import NotFound from '../NotFound';
import Spinner from '../Spinner';
import Form from './Form';
import './style.scss';

function Widget({ 
    isLoading, 
    error,
    icons, 
    description, 
    temperature, 
    city,
    // pressure,
    humidity,
    wind, inputValue, handleChange, handleSubmit}) {

    return(
        <article className="meteo">
            <Form inputValue={inputValue}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            />
            { isLoading && < Spinner /> }
            { !isLoading && error ? < NotFound /> : !isLoading &&
                <div className="meteo-container">
                    <p className="meteo-city">{city}</p>
                <div className="meteo-infos">
                    {/* <h3 className="meteo-day">Lundi 25 avril 2022</h3> */}
                    <p className="meteo-temperature">{temperature}°</p>
                    <img className="meteo-icon"
                    src={`https://openweathermap.org/img/wn/${icons}@2x.png`}
                    />
                    <p className="meteo-description">{description}</p>
                </div>
                <div className='meteo-specification'>
                    {/* <p>Précipitation {pressure} mm/h</p> */}
                    <div className='meteo-specification-title'>Humidité
                        <div className='meteo-specification-info'>
                            {humidity}
                        <em>%</em>
                        </div>
                    </div>
                    <div className='meteo-specification-title'>Vent
                        <div className='meteo-specification-info'>
                            {wind}
                        <em>km/h</em>
                        </div>
                    </div>
                </div> 
            </div>}
        </article>
    )
}

export default Widget;