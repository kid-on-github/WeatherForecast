import React from 'react';

// display the weather forecast
function Days(props){
    const {days} = props
    return Object.keys(days).map(
        date => {
            const {high, low, temps} = days[date]

            // only show days with multiple data points
            return (temps.length > 1) ? <DayRow date={date} high={high} low={low} temps={temps} key={date}/> : ''
        }
    )
  }
  

// display the summary of one day's weather forecast
function DayRow(props){
    const {date, high, low, temps} = props
    const averageTemp = temps.reduce((sum, curr) => sum + curr) / temps.length
  
    
    // decide which set of clothes to display
    let img = 'cool.png'
    if      (averageTemp <= 55) img = 'chill.png'
    else if (averageTemp >= 75) img = 'warm.png'
    
    return (
      <div className='DayRow'>
        <p>
          <span className='subTitle'>{date.replace(/-/g,'.')}</span> 
          <br/> 
          {Math.round(low)}&deg; - {Math.round(high)}&deg;
        </p>
        <img src={`/images/${img}`}/>
      </div>
    )
}
  
export default Days;
