import React from 'react';
import WeatherExtraData from './WeatherextraData';
import WeatherTempeture from './WeatherTempeture';
import PropTypes from 'prop-types';

import './style.css';


const WeatherData =({data})=>{

    const {temperature,weatherState,humidity,wind}=data;

    return(
        <div className='weatherData'>
            <WeatherTempeture temperature={temperature} weatherState={weatherState}/>
            <WeatherExtraData humidity={humidity} wind={wind}/>
        </div>
    )

};
 WeatherData.propTypes={
     data:PropTypes.shape({
         temperature:PropTypes.number.isRequired,
         weatherState:PropTypes.string.isRequired,
         humidity:PropTypes.number.isRequired,
         wind: PropTypes.string.isRequired
     }),
 }
export default WeatherData;