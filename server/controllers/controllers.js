const weather = []
const id = 0
const API_KEY = "1ea91a6d69e150db9a3378e254a22349"
const city = ""
const country = ""

module.exports ={
  getWeather : (req,res)=>{
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`).then(
      res =>{ 
        this.setState({weatherData:res.data.main}); 
      }
    ).catch(err => {console.log(err)})
  }
}