import React from 'react';
import WeatherLocation from './index';
 const LocationList=()=>(
 <div>
     <WeatherLocation  city={"Buenos Aires,ar"}/>
     <WeatherLocation  city={"Guatemala,gt"}/>
     <WeatherLocation  city={"Bogotá,col"}/>

 </div>
 );
 export default LocationList;