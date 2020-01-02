import React from 'react';
import './VehicleList.css';

const Vehicle = ({name, price, crew, capacity, image})=>{

  return(
    <div className="pa3 ma3 br2 shadow-2 bg-light-yellow singleCard">
      <h2>{name.toLowerCase()}</h2>
      <h3>{isNaN(price) ? "Sold out!" : `${price} credits`}</h3>
      <h3>Total Passengers: {crew}</h3>
      <h3>Freight: {capacity}</h3>
      <img src={image}/>


    </div>
  )
}

export default Vehicle;
