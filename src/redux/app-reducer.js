import {getCityTC} from './citiesReducer';
import {requestWeather} from './weatherReducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                isInitialized: true
            }
        default: {
            return state;
        }
    }
}

// Action Creators

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

// Thunk Creators

export const initializeApp = (city, lat, lon) => {
    return (dispatch) => {
        let promiseGetCity = dispatch(getCityTC(city));
        let promiseRequestWeather = dispatch(requestWeather(lat, lon));
        Promise.all([promiseGetCity, promiseRequestWeather])
            .then(() => {
                dispatch(initializedSuccess());
            })
    }
}

export default appReducer;