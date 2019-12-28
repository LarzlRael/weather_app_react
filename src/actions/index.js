import transformForecast from '../components/weatherData/services/transformerForecast';

import trasnforWeather from '../components/weatherData/services/transformWeather';
import axios from 'axios'


export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

//const setCity = value => ({ type: 'setcity', value })
export const setCity = payload => ({ type: SET_CITY, payload })

const setForecasteData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload })
const setWeatherCity = payload => ({ type: SET_WEATHER_CITY, payload })

const uri = 'http://api.openweathermap.org/data/2.5/forecast';
const api_key = '1df4b54c2551746c00253fd4a88eedb4'
const url_weather = `http://api.openweathermap.org/data/2.5/weather`

//payload es el valor de id de la ciudad que queremos consultar
export const setSelectedCity = payload => {
    console.log('valor de payload: ' + payload)

    const url = `${uri}?id=${payload}&appid=${api_key}`;
    //console.log('haciendo peticion a a : ' + url)
    //console.log(peticion)
    return async (dispatch, getState) => {
        //importando por que sin esto no se actuliza el otro estado
        dispatch(setCity(payload));
        //activar en el estado la busque da de datos
        const state = getState();
        const date = state.cities[payload].forecastDateDate

        const now = new Date();
        if (date && (now - date) < 1 * 60 * 1000) {
            return
        }

        const weather_data = await axios.get(url)
        const forecastData = transformForecast(weather_data.data);
        console.log(forecastData);
        return dispatch(setForecasteData({ city: payload, forecastData }))

    };
};

//otra forma de hacer el estado asyncrono con fetch
// export const setSelectedCity = payload => {
//     console.log('valor de payload: ' + payload)

//     const url = `${uri}?id=${payload}&appid=${api_key}`;
//     console.log('haciendo peticion a a : ' + url)
//     //console.log(peticion)
//     return dispatch => {
//         //activar en el estado la busque da de datos
//         dispatch(setCity(payload));
//         return fetch(url).then(
//             data => (data.json())
//         ).then(
//             weather_data => {
//                 const forecastData = transformForecast(weather_data);
//                 console.log(forecastData);
//                 dispatch(setForecasteData({ city: payload, forecastData }))
//             }
//         );

//     };
// };


export const setWeather = payload => {
    console.log('el valor de payload de setweather es : ' + payload)
    return dispatch => {
        payload.forEach(async city => {

            dispatch(getWeatherCity(city));
            const url = `${url_weather}?id=${city}&appid=${api_key}`;

            const weather_data = await axios.get(url)

            const weather = trasnforWeather(weather_data.data)
            dispatch(setWeatherCity({ city, weather }))

        })
    }
    // handleUpdate = async () => {
    //     // el numero representa el id de la ciudad de open weather
    //     const { id_city } = this.props
    //     //console.log('id de la ciudad : ' + id_city)
    //     const weather = await axios.get(getUribyID(id_city))
    //     // el nombre de la ciudad se encuetra en esta constante
    //     const { name } = weather.data

    //     const newData = weatherTransform(weather.data);
    //     this.setState({
    //         data: newData,
    //         city: name
    //     })
    // }

}