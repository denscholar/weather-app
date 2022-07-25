import React from 'react';
import './WeatherItem.scss';

const WeatherItem = ({img, city, temp, desc, country}) => {
  return (
    <div className="weather__container-top">
        <img src={img} alt="" />
        {temp && (<h2>{temp}&deg;</h2>)}
        {city && (<h3>{city ? `${city}: ${country}` : `${country}`}</h3>)}
        <p>{desc ? `${desc}`: ''}</p>
      </div>
  )
}

export default WeatherItem
