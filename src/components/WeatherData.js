import React from 'react';
import Summary from './Summary';
import Days from './Days';
import Accessories from './Accessories';


class WeatherData extends React.Component{
  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillMount(){
    const {city} = this.props
    
    // is a city specified?
    if (city){
      // get data from API
      getWeather(city)
        .then(
          data => data.error 
            ? this.setState({error:data.error})
            : this.setState(data)
        )
    }
    else {
      this.setState({error:'What city do you want a forecast for?'})
    }
  }
  
  render(){
    // display error
    if (this.state.error) return <Message msg={this.state.error}/>
    
    // everything seems to be working
    const {city, overallHigh, overallLow, days} = this.state
    let summary, weather, accessories

    // make sure we have all the data
    if (overallHigh && overallLow){
      accessories = <Accessories overallHigh={overallHigh} overallLow={overallLow}/>
      summary = city && <Summary city={city} overallHigh={overallHigh} overallLow={overallLow}/>
    }

    weather = days && <Days days={days}/>

    // only show weather if we have data to display
    return (summary && weather && accessories) 
      ? <div> {summary} {weather} {accessories} </div>
      : ''
  }
}




// used for errors and prompts
const Message = (props) => <div id='Message'><p>{props.msg}</p></div>




// this function is used to fetch data from the openweathermap API
function getWeather(city){
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=imperial&appid=438c51ac9dbc5e33f3e04f8753d44484`)
      .then(response => response.json())
      .then(data => {
        const {cod, list, city} = data
        
        // handle known API errors
        if (cod === '404') return {error:'City Not Found'}
        if (cod !== '200') return {error:`API ERROR: cod: ${cod}`}
        
        // variables to store final weather data
        let days = {}
        let overallHigh = -1000
        let overallLow = 1000
  
        // loop through data points and restructure data
        list.map(
          weather => {
            const {temp} = weather.main
            const {dt_txt} = weather
            const date = dt_txt.split(' ')[0]
  
  
            if (temp > overallHigh) overallHigh = temp
            if (temp < overallLow) overallLow = temp
            if (!(date in days)) days[date] = { high: temp, low: temp, temps: [temp] }

            else {
              if (temp > days[date].high) days[date].high = temp
              else if (temp < days[date].low) days[date].low = temp
              days[date].temps.push(temp)
            }
          }
        )
        
        // return weather data
        return {
          city:city,
          overallHigh:overallHigh,
          overallLow:overallLow,
          days:days
        }
      })
  }

export default WeatherData;
