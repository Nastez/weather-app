import * as axios from "axios";

const api_key = process.env.REACT_APP_API_KEY;

const instance = axios.create({
    baseURL: `https://api.openweathermap.org/data/2.5/weather`
});

export const weatherAPI = {
    getCurrentWeather() {
        return instance.get(`?lat=56.484680&lon=84.948197&appid=${api_key}&units=metric`)
            .then(response => {
                    return response.data
                }
            )
    }
};


