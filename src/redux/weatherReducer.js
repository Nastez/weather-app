import {weatherAPI} from '../api/api';

const SET_CURRENT_TEMP = 'SET_CURRENT_TEMP';
const SET_CURRENT_WEATHER_CONDITIONS = 'SET_CURRENT_WEATHER_CONDITIONS';

let initialState = {
    currentTemp: null,
    weatherConditions: null
};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TEMP:
            return {
                ...state,
                currentTemp: action.actionCurrentTemp
            }
        case SET_CURRENT_WEATHER_CONDITIONS:
            return {
                ...state,
                weatherConditions: action.weatherConditions
            }
        default:
            return state;
    }
}

// Action Creators

export const setCurrentTemp = (actionCurrentTemp) => ({type: SET_CURRENT_TEMP, actionCurrentTemp: actionCurrentTemp});
export const setCurrentWeatherConditionsAC = (weatherConditions) => ({
    type: SET_CURRENT_WEATHER_CONDITIONS,
    weatherConditions: weatherConditions
});

// Thunk Creators

export const requestWeather = (lat, lon) => {
    return async (dispatch) => {
        let data = await weatherAPI.getCurrentWeather(lat, lon);
        dispatch(setCurrentTemp(data.main.temp));
        dispatch(setCurrentWeatherConditionsAC(data.weather[0].main))
    }
};

export default weatherReducer;