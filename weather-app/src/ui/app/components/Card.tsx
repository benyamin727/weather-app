import React from "react";
import Axios from "axios";

const Card = (props:any) => {
    const fetchWeather = async (e) => {
        e.preventDefault();
        const response = await Axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${'mashhad'}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
        );
        console.log(response,'test')
    };
    fetchWeather('')
    return(
        <div>{props.family}</div>
    )
}

export default Card
