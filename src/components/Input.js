import React, { useState } from 'react';

// get user input
function Input(props){
    const [city, setCity] = useState(props.city)
    return (
      <div id='Input'>
        <input 
          id="city" 
          type="text" 
          placeholder="City" 
          defaultValue={city} 
          onChange={(e) => setCity(e.target.value)}
        />
        
        <span id='link'>
          <a href={`/?city=${city}`}>Check Weather</a>
        </span>
      </div>
    )
  }

  export default Input;