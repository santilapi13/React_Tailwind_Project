function WeatherBottom({feels, humidity, wind, format}) {
    return(
        <div className="flex justify-evenly text-center w-full my-auto p-3 rounded-xl bg-zinc-600">
            <div>
                <p className="font-bold">{feels}°{format}</p>
                <p className="">Feels like</p>
            </div>
            <div>
                <p className="font-bold">{humidity}%</p>
                <p className="">Humidity</p>
            </div>
            <div>
                <p className="font-bold">{wind} MPH</p>
                <p className="">Wind</p>
            </div>
        </div>
    );
}

export default WeatherBottom;