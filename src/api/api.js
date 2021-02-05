import * as axios from "axios";

const api_key_weather = process.env.REACT_APP_API_WEATHER_KEY;
const api_key_cities = process.env.REACT_APP_API_CITIES_KEY;

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather`
});

export const weatherAPI = {
    getCurrentWeather(lat, lon) {
        return instance.get(`?lat=${lat}&lon=${lon}&appid=${api_key_weather}&units=metric`)
            .then(response => {
                    return response.data
                }
            )
    }
};

export const citiesAPI = {
    getGeocoding(city) {
        return axios.get(`http://api.positionstack.com/v1/forward?access_key=${api_key_cities}&query=${city}&limit=1`)
            .then(response => {
                return response.data
            })
    }
}




