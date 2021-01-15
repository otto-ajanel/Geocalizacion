import React,{Component} from 'react';
import PropTypes from 'prop-types'
import Location from './location';
import WeatherData from './weatherData/index';
import transformWeather from '../../src/services/transformWeather';

const cities='Guatemala,gt';
const api_key='f267b01ed8c30ec1b82cb04834dcf352'
const url='http://api.openweathermap.org/data/2.5/weather'
const apiURL=`${url}?q=${cities}&appid=${api_key}&units=metric`;


 class Weaterlocation extends Component{

    constructor(){
        console.log("Constructor");
        super();
        this.state={
            city:'Guatemala.',
            data:null
        };
    }

   handleUpdateClick=()=>{

       fetch(apiURL).then(data=>{
        return data.json();
       }).then(weather_data=>{
           const data= transformWeather(weather_data);
           this.setState({data})
       }).catch(ex=>{
         console.log(ex);
       });
    
  };
  UNSAFE_componentWillMount() {
      console.log("comjponetnt");
      this.handleUpdateClick(); 
  }
 


     render=()=>{
         console.log("render")
         const {city,data}=this.state;
         return(
     <div className='weatherLocation'>
         <Location city={city} />
        { data ? <WeatherData data={data}/>: 'Cargando...'}
     </div>
     )
     };
}
Weaterlocation.propTypes={
    city:PropTypes.string
}
 export default Weaterlocation;