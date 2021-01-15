import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
const Location =({city})=>(
        <div className='locationContent'>
            <h1>Ciudad de {city}</h1>
        </div>
    );
    Location.propTypes={
        city:PropTypes.string.isRequired
    }

export default Location;
