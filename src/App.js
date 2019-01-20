import React, { Component } from 'react';
import './App.css';
import Title from './Components/Title';
import Form from './Components/Form';
import Weather from './Components/Weather'
import Data from './Components/Data'
import axios from 'axios'

const  API_KEY = "1ea91a6d69e150db9a3378e254a22349";


class App extends Component {
  constructor(){
    super();
    this.state = {
      weatherData: [],
      City: "",
      Country:"",
      cityInput:"",
      countryInput:""
    }
  }
  //http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=${API_KEY}
  
  componentDidMount(){
    this.getWeather();
  }


  getWeather = () =>{
    this.setState({City: this.state.cityInput,Country: this.state.countryInput}, () => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.City},${this.state.Country}&APPID=${API_KEY}`).then(
      res =>{ 
        this.setState({weatherData:res.data.main}); 
      }
    ).catch(err => {console.log(err)}))
        
  }

  getCityLocation = (e) =>{
    this.setState({cityInput: e.target.value})
    
  }

  getCountryLocation = (m) =>{
    this.setState({countryInput: m.target.value})
  }


  render() {
    let{City, Country, weatherData} = this.state
    return (
      <div>
        <Title />
        <Form  getWeather = {this.getWeather} getCityLocation = {this.getCityLocation} getCountryLocation = {this.getCountryLocation}/>
        <Weather city ={City} country = {Country}/>
        <Data data = {weatherData}/>
      </div>
    );
  }
}

export default App;
