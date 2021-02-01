import {weatherAPI} from "../api/api";

const SET_CURRENT_WEATHER_CONDITIONS = 'SET_CURRENT_WEATHER_CONDITIONS';

const initialState = {
    weatherConditions: null
}

const weatherConditionsReducer = (state = initialState, action) => {
    switch (action.type) {
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

const setCurrentWeatherConditionsAC = (weatherConditions) => ({
    type: SET_CURRENT_WEATHER_CONDITIONS,
    weatherConditions: weatherConditions
})

// Thunk Creators

export const requestWeatherConditions = () => {
    return async (dispatch) => {
        let data = await weatherAPI.getCurrentWeather();
        dispatch(setCurrentWeatherConditionsAC(data.weather[0].main))
    }
};

export default weatherConditionsReducer;