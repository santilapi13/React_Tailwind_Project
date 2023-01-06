import React, {useState} from 'react';
import WeatherContainer from './WeatherContainer';
import axios from 'axios';

function WeatherApp() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');
  const [format, setFormat] = useState('C');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a31431ee68b2e0c55f57c3c234447bfa`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      setLocation('');
    }
  }

  const handleFormat = () => {
    if (format === 'F') {
      setFormat('C')
    } else {
      setFormat('F');
    }
  }

  return (
    <div>
      <h1 className="pt-6 text-center font-base text-4xl">Weather forecast with <span className="font-bold text-sky-500">Axios</span> (not a hook) </h1>
      <p className="text-center my-2 italic">API from <a className="text-blue-500" href="https://openweathermap.org">openweathermap.org</a></p>
      <div className="text-center p-2">
        <input className="px-3 py-3 text-xl rounded-3xl border border-solid border-black bg-zinc-300 placeholder:text-gray-600"
          value = {location}
          onChange = {(event) => setLocation(event.target.value)}
          onKeyDown = {searchLocation}
          placeholder="Enter a location"
          type= "text"
        />
      <button className="px-6 py-2.5 ml-1 bg-gray-500 border-black text-white font-bold leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" onClick={handleFormat}>°{format}</button>  
      </div>
      <WeatherContainer data={data} format={format}/>
    </div>
  );
}

export default WeatherApp;