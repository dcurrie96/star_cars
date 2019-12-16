import React from 'react';
import Vehicle from './Vehicle';
import { images } from './vehImages';
import './VehicleList.css';

const VehicleList=({ vehicles })=>{
  console.log("Here are the vehicles in vehicle list:");
  console.log(vehicles);
  return(
    <div className='cardContain'>
    {
      vehicles.map((vehicle, i) =>{
        return (<Vehicle
                name={vehicles[i].name}
                price={vehicles[i].price}
                capacity={vehicles[i].capacity}
                crew={Number(vehicles[i].passengers) + Number(vehicles[i].crew)}
                image={images[vehicles[i].name]}
                />
        )
      })
    }
  </div>

  )
}

export default VehicleList;
