import { combineReducers } from 'redux'
import { createSelector } from "reselect";
import { cities, getForecastDataFromCitis as _getForecastDataFromCitis, getWeatherCities as _getWeatherCities } from './citys'
import { city } from './city'

export default combineReducers({
    cities,
    city
});

export const getCity = state => state.city

export const getForecastDataFromCities = state => (_getForecastDataFromCitis(state.cities, getCity(state)));

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities)
