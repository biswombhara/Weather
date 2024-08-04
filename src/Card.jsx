import "./Card.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Clear, Snow, Clouds, Mist, Default,Thunderstorm, Haze, Rain} from "./img"
export default function Cards({info}){
  
  let img;
  
    switch(info.Weather){
      case "Clouds": img = Clouds;
      break;
      case "Rain": img = Rain;
      break;
      case "Haze": img = Haze;
      break;
      case "Thunderstorm": img = Thunderstorm;
      break;
      case "Mist": img = Mist;
      break;
      case "Snow": img = Snow;
      break;
      case "Clear": img = Clear;
      break;
      default: img = Default;
    }
    
    return <>
        <Card className='card' sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={img}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        </Typography>
        <Typography variant="body2" color="text.secondary" component="span">
          <h3><b>{info.Name}</b></h3>
          <p>Feels like {(info.Feels_like-273.15).toFixed(2)}&deg;C</p>
          <p>Weather is full of {info.Weather}</p>
          <p>Humidity : {info.Humidity}%</p>
          <p>Pressure : {info.Presure} mBar</p>
          <p>Maximum Temperature : {(info.Max_Temp-273.15).toFixed(2)}&deg;C</p>
          <p>Minimum Temperature : {(info.Min_Temp-273.15).toFixed(2)}&deg;C</p>
        </Typography>
        </CardContent>
        </Card>
    </>
}