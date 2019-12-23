import React, { Component } from 'react';
import Location from './weatherLocation/location';
import WeatherData from './weahterData';
import './weatherLocation/stylesLocation.css';
import { SUN } from '../../constants/weatherConstans';
import './styles.css';

//funcion donde se trasforma que esta en otro archivo
import weatherTransform from '../weatherData/services/transformWeather';
//importadno la url donde se hace la peticiin get
import axios from 'axios'
import CircularProgress from '@material-ui/core/CircularProgress';
import propTypes from 'prop-types';
// importando la solicutid a la api del clima
import getUribyID from '../weatherData/services/getUrlByid';

export default class weatherLocation extends Component {
    constructor(props) {
        super(props);
        const { city } = props;

        this.state = {
            city,
            data: null,
            // data: this.datas
        }
    }
    componentDidMount() {
        this.handleUpdate()
    }

    datas = {
        temperature: 5,
        weatherstate: SUN,
        humidity: 10,
        wind: '10/ms'
    }
    handleUpdate = async () => {
        // el numero representa el id de la ciudad de open weather
        const { id_city } = this.props
        //console.log('id de la ciudad : ' + id_city)
        const weather = await axios.get(getUribyID(id_city))
        // el nombre de la ciudad se encuetra en esta constante
        const { name } = weather.data

        const newData = weatherTransform(weather.data);
        this.setState({
            data: newData,
            city: name
        })
    }

    render() {
        const { city } = this.state;
        const data = this.state.data
        const { onWeatherLocationClick } = this.props;
        return (
            <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                <Location city={city} />
                {data ? <WeatherData data={data} />
                    : <CircularProgress />}
            </div>
        )
    }
}

weatherLocation.propTypes = {
    city: propTypes.string.isRequired,
    onWeatherLocationClick: propTypes.func
}