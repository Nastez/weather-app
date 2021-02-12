import {citiesAPI} from '../api/api';
import {requestWeather} from './weatherReducer';

const SET_CITY = 'SET_CITY';
const SET_LATITUDE_LONGITUDE = 'SET_LATITUDE_LONGITUDE';

const initialState = {
    city: 'Tomsk',
    lat: 56.5010397,
    lon: 84.9924506,
};

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CITY:
            return {
                ...state,
                city: action.city
            }
        case SET_LATITUDE_LONGITUDE:
            return {
                ...state,
                lat: action.lat,
                lon: action.lon
            }
        default:
            return state
    }
};

// Action Creators

export const setCityAC = (city) => ({type: SET_CITY, city: city});
export const setLatitudeLongitude = (lat, lon) => ({type: SET_LATITUDE_LONGITUDE, lat, lon});

// Thunk Creators

export const getCityTC = (city) => {
    return async (dispatch) => {
        let data = await citiesAPI.getGeocoding(city);
        let lat = data.data[0].latitude;
        let lon = data.data[0].longitude;

        dispatch(setCityAC(city));
        dispatch(setLatitudeLongitude(lat, lon));
        dispatch(requestWeather(lat, lon));
    }
}

export default citiesReducer;
