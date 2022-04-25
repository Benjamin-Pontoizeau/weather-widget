import axios from 'axios';

const MeteoApi = {
    getWeather(code) {
        return axios.get(`
            ${process.env.REACT_APP_API_URL}weather?zip=${code},fr&appid=${process.env.REACT_APP_API_KEY}&lang=fr&units=metric
        `);
    }
}

export default MeteoApi;