import "./style.css"
import {useEffect, useState} from "react";
import WeatherCard from "./weatherCard";


function Temp(){
const[searchValue,setSearchValue]=useState("Pune")
const[tempInfo,setTempInfo]=useState({});


const getWeatherInfo=async()=>{
try{
let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&
units=metric&appid=ebedc8c48f1d886138e56675eb9e628a`;

const res= await fetch(url);
const data= await res.json();

// destucturing api
const{temp,pressure,humidity}=data.main;
const {main:weathermood}=data.weather[0];
const {name}=data;
const {speed}=data.wind;
const {country,sunset}=data.sys;

const myNewWeatherInfo={
    temp,
    pressure,
    humidity,
    weathermood,
    name,
    speed,
    country,
    sunset
};
setTempInfo(myNewWeatherInfo)
// console.log(temp,pressure,humidity);

console.log(data);
}
catch(err){
    console.log("error");
}
}

useEffect(()=>{
getWeatherInfo();
},[])
    return(
        <>
        <div className="wrap">
            <div className="search">
                <input type="search"
                 placeholder="search.." 
                 autoFocus
                 className="search" 
                 value={searchValue}
                 onChange={(e)=>setSearchValue(e.target.value)}/>
                <button onClick={getWeatherInfo}>search</button> 
            </div>
         </div>

{/* artical section */}
<WeatherCard tempInfo={tempInfo} />

        
        </>
    )
}

export default Temp;