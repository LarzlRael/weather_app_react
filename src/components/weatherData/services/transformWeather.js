import convert from "convert-units";
import { SUN, DRIZZLE, CLOUD, RAIN, THUNDER, SNOW } from '../../../constants/weatherConstans';

const get_temp = kelvin => {
    return Number(convert(kelvin).from("K").to("C")).toFixed(0)
}
const getWeahterSate = weather_data => {
    //const { id } = weather_data.weather;
    const id  = weather_data.weather[0].id
    //console.log(weather_data.weather)
    
    if (id < 300) {
        return THUNDER
    } else if (id < 400) {
        return DRIZZLE
    } else if (id < 600) {
        return RAIN
    } else if (id < 700) {
        return SNOW
    } else if (id === 800) {
        return SUN;
    } else {
        return CLOUD
    }
}

const trasnforWeather = weather_data => {

    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherstate = getWeahterSate(weather_data);
    //convertiendo a number por que devuelve string (no se porque)
    const temperature = parseInt(get_temp(temp))
    // console.log('valores recibidos : '+humidity+"\ntemperatura : "+temperature+
    // "\nVelocidad del viento : "+speed+"\nWheatherDate : "+weatherstate)
    const new_data = {
        temperature,
        weatherstate,
        humidity,
        wind: `${speed} m/s`
    }
    console.log(new_data)
    return new_data;

}

export default trasnforWeather;