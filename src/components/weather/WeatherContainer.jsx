import React from 'react';
import WeatherTop from './WeatherTop';
import WeatherBottom from './WeatherBottom';

function WeatherContainer({data, format}) {

    function convertTemp(tempKelvin, format) {
        if (format === 'F') {
            return ((tempKelvin - 273.15)*9/5 + 32).toFixed(2);
        } else {
            return (tempKelvin - 273.15).toFixed(2);
        }
    }

    return(
        <div className="max-w-2xl h-96 m-auto px-0 py-4 relative top-1/4 flex flex-col justify-between bg-sky-500 rounded-3xl text-2xl text-white">
            <WeatherTop 
                location={data.name} 
                temperature={data.main ? convertTemp(data.main.temp, format) : null} 
                description={data.weather ? data.weather[0].main : null}
                format = {format}
            />
            <WeatherBottom
                feels={data.main ? convertTemp(data.main.feels_like, format) : null}
                humidity={data.main ? data.main.humidity : null}
                wind={data.wind ? data.wind.speed : null}
                format = {format}
            />
        </div>
    );
}

export default WeatherContainer;