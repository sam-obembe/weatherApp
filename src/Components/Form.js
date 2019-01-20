import React, {Component} from 'react';

class Form extends Component{
  
 render(){
   return(
     <div>
      
        <input type = "text" placeholder = "city..." onChange = {(e)=>this.props.getCityLocation(e)}/>
        <input type = "text" placeholder = "country" onChange = {(m)=>this.props.getCountryLocation(m)}/>
        <button onClick = {e => this.props.getWeather(e)}>Get weather</button>
      
       
     </div>
   )
 }
}

export default Form;