function WeatherTop({location, temperature, description, format}) {
    return(
        <div className="w-full mx-4 my-auto">
            <p className="font-bold text-black">{location}</p>
            <h1 className="text-8xl font-extrabold">{temperature}°{format}</h1>
            <p className="pt-4 text-black font-medium">{description}</p>
        </div>
    );
}

export default WeatherTop;