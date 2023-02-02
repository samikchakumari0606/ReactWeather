import React, { useEffect } from "react";
import {BsFillSunFill,BsCloudSunFill,BsSunsetFill} from "react-icons/bs";
import {GiHeatHaze} from "react-icons/gi";
import {RiMistFill} from "react-icons/ri";
import {WiWindy} from "react-icons/wi";

function WeatherCard({tempInfo}){
    const[weatherState,setWeatherState]=React.useState("");
    const {
        temp,
        pressure,
        humidity,
        weathermood,
        name,
        speed,
        country,
        sunset
    }=tempInfo;

    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
case "Clouds":setWeatherState(<BsCloudSunFill size={100}/>);
break;

case "haze":setWeatherState(<GiHeatHaze size={100}/>);
break;

case "Clear":setWeatherState(<BsFillSunFill size={100}/>);
break;

case "Mist":setWeatherState(<RiMistFill size={100}/>);
break;
default:setWeatherState(<BsFillSunFill  size={100}/>);
    break;
            }
        }
    },[weathermood])

let sec=sunset;
let date=new Date(sec*1000);
let timeStr=`${date.getHours()}:${date.getMinutes()}`;

    return(
        <> 


<div className="border">
           
           <div className="sun">
           {/* <BsFillSunFill size={100}/> */}
           < p>`{weatherState }`</p>
           </div>

         <div className="weatherInfo">
           <div className="temp">
           <span>{temp}</span>
           </div>

       <div className="divide">
      <div className="des">
   <div className="weatherCondition">{weathermood}</div>
   <div className="place">{name},{country}</div>
      </div>
    
         </div>
         
         <div className="date">{new Date().toLocaleString()}</div>
           </div>
         

{/* our four divided section */}

          <div className="foursection">
           <div className="tempMin">
           <div className="twosided">
           <p><BsSunsetFill size={30}/></p>
           <p className="left">{timeStr} PM<br/>SUNSET</p>
         </div>
           </div>
       
           <div className="tempMin">
           <div className="twosided">
           <p><BsSunsetFill size={30}/></p>
           <p className="left">{humidity}<br/>HUMEDITY</p>
         </div>
           </div>


           <div className="tempMin">
           <div className="twosided">
           <p><BsSunsetFill size={30}/></p>
           <p className="left">{pressure} <br/>PRESSURE</p>
         </div>
           </div>


           <div className="tempMin">
           <div className="twosided">
           <p><WiWindy size={30}/></p>
           <p className="left">{speed}<br/>SPEED</p>
         </div>
           </div>
       
          </div>

      </div>
        </>
    )
}

export default WeatherCard;