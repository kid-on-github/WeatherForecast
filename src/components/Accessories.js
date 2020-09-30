import React from 'react';

// Don't forget your coat!
function Accessories(props){
    const {overallHigh, overallLow} = props
    const hot = overallHigh >= 80 ? <img src='/images/hot.png'/> : ''
    const cold = overallLow <= 50 ? <img src='/images/cold.png'/> : ''
    
    if (hot || cold){
      return (
        <div id='Accessories'>
          <p className='subTitle'> Don't <br/> Forget</p>
          {hot}
          {cold}
        </div>
      )
    }
  
    return <br/>
  }
  
  export default Accessories;
  