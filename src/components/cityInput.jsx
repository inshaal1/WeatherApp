import React, { useState } from 'react'
import countries from './data/countries.js'
const DataInput = ({inputCity ,inputCountry}) => {
    const [city,setCity]=useState('')
    const [country,setCountry]=useState('')
    
    function handleSubmit(e){
        e.preventDefault();
        if (city.trim()=="") return
        inputCity(city)
        inputCountry(country)
        setCity('')
        setCountry('')
    }
  return (
    <div className='Cityinput'>
        <form onSubmit={handleSubmit} className='Form'>
        <div className='city'>
        <label >City:</label>
        <input type="text" name="city" 
        value={city}
        onChange={(e)=>{setCity(e.target.value)}}
        />
        </div>
        <br />
        <div  className='country'>  
         <label >Country:</label>
         <select value={country}
           onChange={(e)=>{ setCountry(e.target.value)}}>
          <option value="">-- Select a country --</option>
          { countries && countries.map( (c)=>(
              <option key={c.code} value={c.code}>
                {c.name}
              </option>
          ))}
         </select>
        </div>
          <br />
        <button type="submit">Find</button>
        </form>
    </div>
  )
}

export default DataInput