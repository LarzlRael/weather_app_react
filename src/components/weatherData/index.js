import React from 'react';
import Location from './weatherLocation/location';
import WeatherData from './weahterData';
import './weatherLocation/stylesLocation.css';
import { SUN } from '../../constants/weatherConstans';
import './styles.css';

//funcion donde se trasforma que esta en otro archivo
//import weatherTransform from '../weatherData/services/transformWeather';
//importadno la url donde se hace la peticiin get
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import propTypes from 'prop-types';
// importando la solicutid a la api del clima
import getUribyID from '../weatherData/services/getUrlByid';


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
const weatherLocation = ({ onWeatherLocationClick, city, data }) => (
    
    <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
        <Location city={city} />
        {console.log('el valor de data es : '+data+"\ny el valor de citi"+city)}
        {data ? <WeatherData data={data} />
            : <CircularProgress />}
    </div>
);
export default weatherLocation;
    

weatherLocation.propTypes = {
    id_city: propTypes.number.isRequired,
    onWeatherLocationClick: propTypes.func,
    data: propTypes.shape({
        temperature: propTypes.number.isRequired,
        weatherstate: propTypes.string.isRequired,
        humidity: propTypes.number.isRequired,
        wind: propTypes.string.isRequired
    }
    )
}