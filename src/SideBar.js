import React from 'react';
import './SideBar.css'

const SideBar = ({minPrice, maxPrice, changeGeneric, minPass, maxPass, minFreight, maxFreight})=>{
  return (
    <div className="sticky">
      <h3 className='mb0'>Price</h3>
      <div className='inline'>
        <input className='mb1 mt1' onChange={(e) => changeGeneric(e.target.value, "minPrice")} type='number'/>
        <span className='mb1 mt1'>to</span>
        <input className='mb1 mt1' onChange={(e) => changeGeneric(e.target.value, "maxPrice")} type='number'/>

      </div>
      <h3 className='mb0'>Name</h3>
      <div className='inline'>
        <input className='mb1 mt1' type='text' onChange={(e) => changeGeneric(e.target.value.toLowerCase(), "search")} />
      </div>
      <h3 className='mb0'>Passengers</h3>
      <div className='inline'>
        <input className='mb1 mt1' type='number' onChange={(e) => changeGeneric(e.target.value, "minPassenger")} />
        <span className='mb1 mt1'>to</span>
        <input className='mb1 mt1' type='number' onChange={(e) => changeGeneric(e.target.value, "maxPassenger")}/>
      </div>
      <h3 className='mb0'>Freight</h3>
      <div className='inline'>
        <input className='mb1 mt1' type='number' onChange={(e) => changeGeneric(e.target.value, "minFreight")} />
        <span className='mb1 mt1'>to</span>
        <input className='mb1 mt1' type='number' onChange={(e) => changeGeneric(e.target.value, "maxFreight")}/>
      </div>
    </div>
  )
}

export default SideBar;
