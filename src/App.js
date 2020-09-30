import React from 'react';
import WeatherData from './components/WeatherData';
import Input from './components/Input';

function App(){
  // get city from url
  const params = new URLSearchParams(window.location.search)
  const city = params.get('city')

  return (
    <div className="App">
      <Input city={city}/>
      <WeatherData city={city}/>
    </div>
  )
}

export default App;