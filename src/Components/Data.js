import React, {Component} from 'react';

class Data extends Component{

 render(){
  let {humidity,pressure,temp,temp_max,temp_min} = this.props.data
   return(
     <div>
      <p>Humidity: {humidity}</p>
      <p>Pressure: {pressure}</p>
      <p>Temperature: {temp}</p>
       
     </div>
   )
 }
}

export default Data;
