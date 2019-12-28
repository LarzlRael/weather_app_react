import React from 'react';
import propTypes from 'prop-types';
import ForeCastItem from './ForecastItem/ForeCastItem'
import './weatherData/locationListStyle.css';
import CircularProgress from '@material-ui/core/CircularProgress';
// import transformerForecast from './weatherData/services/transformerForecast';
// import axios from 'axios';
const renderForeCastItemDay = (forecasetData) => {
    return forecasetData.map(forecast => (
        <ForeCastItem key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            data={forecast.data}
            hour={forecast.hour} />))
}

const renderProgres = () => {
    return (<CircularProgress />)
}
const forecastExtende = ({ forecastData, city }) => (
    < div >
        <h2 className="forest-title">Pronostico extendido para
                 {city}</h2>

        {forecastData ? renderForeCastItemDay(forecastData) : renderProgres()}
    </div >
)

forecastExtende.propTypes = {
    city: propTypes.number.isRequired,
    forecastData: propTypes.array
}
export default forecastExtende;