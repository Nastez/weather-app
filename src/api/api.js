import * as axios from "axios";

const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather`
});

export const weatherAPI = {
    getCurrentWeather() {
        return instance.get(`?lat=56.484680&lon=84.948197`)
            .then(response => {
                debugger
                    return response.data
                }
            )
    }
};


