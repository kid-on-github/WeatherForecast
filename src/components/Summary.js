import React from 'react';

// show a summary of the overall lows and highs
function Summary(props){
    const {city, overallHigh, overallLow} = props
    return(
        <div id='Summary'>
        <h1>{city.name}, {city.country}</h1>
        <h5>Weather Forecast</h5>
        <h5>Next 120 Hours (5 days)</h5>
        <br/>
        <p>High: {Math.round(overallHigh)}&deg;</p>
        <p>Low: {Math.round(overallLow)}&deg;</p>
        </div>
    )
}

export default Summary;
