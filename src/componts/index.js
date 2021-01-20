import React,{Component} from 'react';
import PropTypes from 'prop-types'
import Location from './location';
import WeatherData from './weatherData/index';
import transformWeather from '../../src/services/transformWeather';

import CircularProgress from 'material-ui/CircularProgress';
const api_key='f267b01ed8c30ec1b82cb04834dcf352'
const url='http://api.openweathermap.org/data/2.5/weather'


class Weaterlocation extends Component{
    
    constructor({city}){
        super();
        this.state={
            city,
            data:null
        };
    }
    
    handleUpdateClick=()=>{
        const {city}=this.state;
       const apiURL=`${url}?q=${city}&appid=${api_key}&units=metric`;
       fetch(apiURL).then(data=>{
        return data.json();
       }).then(weather_data=>{
           const data= transformWeather(weather_data);
           this.setState({data});
             console.log("setState");
       }).catch(ex=>{
         console.log(ex);
       });
  };
   componentWillMount() {
       
    this.handleUpdateClick(); 
  }
 


     render=()=>{
         const {city,data}=this.state;
         return(
     <div className='weatherLocation'>
         <Location city={city} />
        {
        
        data ? <WeatherData data={data}/>: 
        <CircularProgress size={60} thickness={7}/>}
     </div>
     )
     };
}
Weaterlocation.propTypes={
    city:PropTypes.string
}
 export default Weaterlocation;