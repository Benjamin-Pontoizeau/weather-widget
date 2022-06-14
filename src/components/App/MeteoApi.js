import axios from 'axios';

const MeteoApi = {
    getWeather(city) {
        return axios.get(`
            ${process.env.REACT_APP_API_URL}weather?q=${city},fr&appid=${process.env.REACT_APP_API_KEY}&lang=fr&units=metric
        `);
    }
}

export default MeteoApi;