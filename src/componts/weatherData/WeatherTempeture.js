import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import{CLOUD,CLOUDY,SUN,RAIN} from '../../constants/weathers'

const stateToIcon=weatherState=>{
switch (weatherState) {
    case CLOUD:
        return"cloud";
    case CLOUDY:
        return"cloudy";
        case SUN:
            return"day-sunny";
    case RAIN:
            return"rain";
    default:
        return"day-sunny";
}
    
}
const GetWeatherIcon=weatherState=>{
    
    return(<WeatherIcons className='wIcon' name={stateToIcon(weatherState)} size="4x"/>)
};

const WeatherTempeture =({temperature,weatherState})=>(
 <div className='weatherTemperature'>
     
     {GetWeatherIcon(weatherState)}
     <span className='temperature'>{`${temperature} `}</span>
     <span className='teperatureType'>C°</span>
 </div>
);
WeatherTempeture.propTypes={
     temperature:PropTypes.number.isRequired,
     weatherState:PropTypes.string

};

export default WeatherTempeture;