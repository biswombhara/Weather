import Weather from "./Weather";
import Cards from "./Card";
import Error from "./Error";
import { useState } from "react";
import "./WeatherApp.css";
export default function WeatherApp(){
    let [Info, setInfo] = useState({
        Name: "Keonjhar",
        Feels_like : "297.15",
        Weather : "Good",
        Humidity: "96",
        Presure: "1001",
        Max_Temp : "306.26",
        Min_Temp: "294.05",
    });
    let updateInfo = (update) =>{
        setInfo(update);
    }
    return <div className={
        (Info.Weather=="Clouds")? "Clouds WeatherBox":
        (Info.Weather=="Rain")? "Rain WeatherBox":
        (Info.Weather=="Haze")? "Haze WeatherBox":
        (Info.Weather=="Thunderstorm")? "Thunderstorm WeatherBox":
        (Info.Weather=="Mist")? "Mist WeatherBox":
        (Info.Weather=="Snow")? "Snow WeatherBox":
        (Info.Weather=="Clear")? "Clear WeatherBox":"Default WeatherBox"
    }>
        <div className="WeatherApp">
            <Weather updateInfo={updateInfo}/>
            {(typeof(Info.Name) != "undefined")?
            <Cards info={Info} />:<Error/>
            }
        </div>
    </div>
}