import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Weather.css";
import { useState } from 'react';
export default function Weather({updateInfo}){
    let API_KEY = "48b5cd32b12af7feaf9af5b1abc7e9bf";
    let API_URL = "http://api.openweathermap.org/data/2.5/weather";
    let [city, setCity] = useState("");
    let handleChange = (e)=>{
        setCity(e.target.value);
    }
    let weatherReport;
    let getWeather = async ()=>{
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let weather = await response.json();
            weatherReport = {
                Name: weather.name,
                Feels_like : weather.main.feels_like,
                Weather : weather.weather[0].main,
                Humidity: weather.main.humidity,
                Presure: weather.main.pressure,
                Max_Temp : weather.main.temp_max,
                Min_Temp: weather.main.temp_min,            
            }
            return weatherReport;
        }catch(err){
            return err;
        }
    }
    let handleSubmit = async (e)=>{
        e.preventDefault();
        setCity("");
        let newInfo = await getWeather();
        updateInfo(newInfo);
    }
    return <div className='weather'>
        <h2>Enter Your City Name</h2>
        <form onSubmit={handleSubmit} className='flex'>
            <TextField id="outlined-basic" label="City" variant="outlined" required value={city} onChange={handleChange} />
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button variant="contained" type='submit'><SearchIcon/>Search</Button>
        </form>        
        <hr />
    </div>
}