import {weatherAPI} from "../api/api";

const SET_CURRENT_TEMP = 'SET_CURRENT_TEMP';

let initialState = {
    currentTemp: null
};

const currentTempReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_TEMP:
            return {
                ...state,
                currentTemp: action.actionCurrentTemp
            }
        default:
            return state;
    }
}

// Action Creator

export const setCurrentTemp = (actionCurrentTemp) => ({type: SET_CURRENT_TEMP, actionCurrentTemp: actionCurrentTemp});

// Thunk Creator

export const requestCurrentTemp = () => {
    return async (dispatch) => {
        let data =  await weatherAPI.getCurrentWeather();
        dispatch(setCurrentTemp(data.main.temp))
    }
};

export default currentTempReducer;