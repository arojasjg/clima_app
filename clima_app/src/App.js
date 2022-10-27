import React from 'react';
import { useState } from 'react';
import WeatherApi from './services/Wheater_Api';
import Card from './components/Card';
import Error from './components/Errors';
import Header from './components/Header';

/*

              setWeather(response.data)
              setErrorMessage('')
              */

const App = () => {

  const {getWeather,getLocationKey} = WeatherApi();
  const [weather, setWeather] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [locationName, setLocationName] = useState();

  //get location name from  input
  const handleLocationChange = (event) => {
    setLocationName(event.target.value)
  }

  return (
    <div className='App'>
      <Header />
      <form>
        <div>
        <input
          autoComplete='off'
          autoFocus
          id='city'
          onChange={handleLocationChange}
          placeholder='Please enter a city'
        />
        </div>
        <button type="submit" onClick={(event)=>{
          
          getLocationKey(locationName)
          .then((response)=>{
            getWeather(response)
            .then((response)=>{
              setWeather(response.data)
              setErrorMessage('')
            })
          })
          .catch((error)=>{
            setWeather();
            setErrorMessage(error.message)
          })
          event.preventDefault(); 
        }}>Give me the weather</button>
      </form>
      <Card weather={weather} locationName={locationName} />
      <Error errorMessage={errorMessage} />
    </div>
  )
}

export default App;
