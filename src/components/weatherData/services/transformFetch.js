import convert from 'convert-units'
import * as consts from '../../../constants/weatherConstans'

const getTemp = (temp, unit) => {
    return convert(temp).from("K").to("C")
}

const getWeatherState = weather => {
    const { id } = weather
    if (id < 300) {
        return consts.THUNDER
    } else if (id < 400) {
        return consts.DRIZZLE
    } else if (id < 600) {
        return consts.RAIN
    } else if (id < 700) {
        return consts.SNOW
    } else if (id === 800) {
        return consts.SUN
    } else {
        return consts.CLOUD
    }
}


const transformWeather = weather_data => {
    console.log(weather_data)
    const { humidity, temp } = weather_data.main
    const { speed } = weather_data.wind
    const weatherState = getWeatherState(weather_data.weather[0])
    const temperature = getTemp(temp, true).toFixed(0)

    // console.log(weatherState)

    const data = {
        temperature,
        weatherState,
        humidity,
        wind: speed
    }

    return data;
}


export default transformWeather;