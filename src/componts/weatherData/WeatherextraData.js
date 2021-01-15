import React from 'react';
import PropTypes from 'prop-types';
const WeatherExtraData =({humidity, wind})=>(
    <div className='weatherExtrainfo'>
        
       <span className='wExtraInfo'>{`Humedad: ${humidity} % -`}</span>
       <span className='wExtraInfo'>{` ${wind} wind`}</span>
        
    </div>
);
WeatherExtraData.propTypes={
 humidity:PropTypes.number.isRequired,
 wind:PropTypes.string.isRequired
};
export default WeatherExtraData;