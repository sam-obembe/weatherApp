import React, {Component} from 'react';

class Weather extends Component{
 render(){
   return(
     <div>
       <h1>{this.props.city} , {this.props.country}</h1>
       
     </div>
   )
 }
}

export default Weather;