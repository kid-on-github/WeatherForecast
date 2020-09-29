import React from 'react';
import './App.css';




function App(){
  // get city, state, and country values from url
  const params = new URLSearchParams(window.location.search)
  const city = params.get('city')
  const state = params.get('state')
  const country = params.get('country')
  console.log(city, state, country)

  return (
    <div className="App">
      <Input city={city} state={state} country={country}/>
      <WeatherData/>
    </div>
  )
}






function WeatherData(){
  return (
    <div>
      <Summary/>
      <DayRow/>
      <DayRow/>
      <DayRow/>
      <DayRow/>
      <DayRow/>
      <Accessories/>
    </div>
  )
}




function Input(props){
  return (
    <div className='Input'>
      <input id="city" type="text" placeholder="City" defaultValue={props.city}/>
      <input id="state" type="text" placeholder="State" defaultValue={props.state}/>
      <input id="country" type="text" placeholder="Country" defaultValue={props.country}/>
      <a>Check Weather</a>
    </div>
  )
}

function DayRow(){
  return (
    <div className='DayRow'>
      <p>
        <span className='subTitle'>Day 1</span> 
        <br/> 
        80 - 90
      </p>
      <img src='/images/warm.png'/>
    </div>
  )
}

function Summary(){
  return(
    <div id='Summary'>
      <p className='subTitle'>Five Day Forecast</p>
      <p>High: </p>
      <p>Low: </p>
    </div>
  )
}

function Accessories(){
  return (
    <div id='Accessories'>
      <p className='subTitle'>
        Don't <br/>
        Forget 
      </p>
      <img src='/images/hot.png'/>
      <img src='/images/cold.png'/>
    </div>
  )
}

export default App;
