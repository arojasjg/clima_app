import axios from "axios";
import API_KEY from "../components/Api_Key";

const WeatherApi = () => {
  //fetch data from API
  async function getLocationKey(locationName) {
 
    //get  id based on name
    return axios
      .get(
        `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${locationName}`
      )
      .then((response) => {
        return response.data[0].Key;
      });
  }

  async function getWeather(key) {
    //get weather based on location id
    return axios
      .get(
        `https://dataservice.accuweather.com/forecasts/v1/daily/1day/${key}?apikey=${API_KEY}&metric=true`
      )
      .then((response) => {
        return response;
      });
  }

  return {
    getWeather,getLocationKey
  }
};

export default WeatherApi;
