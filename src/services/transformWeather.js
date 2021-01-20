import{ SUN} from '../constants/weathers';

 const getWeatherState=(weather)=>{
    return weather;
    }
 const transformWeather=(weather_data)=>{
        const {humidity,temp}=weather_data.main;
        const {speed}=weather_data.wind;
        const weatherState=getWeatherState(SUN);
        const temperature=temp;
        const data={
            humidity,
            temperature,
            weatherState,
            wind:`${speed}m/s`

        }
        return data;
    }
    export default  transformWeather;