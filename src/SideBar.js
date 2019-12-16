import React from 'react';
import './SideBar.css'

const SideBar = ({minPrice, maxPrice})=>{
  return (
    <div>
      <h3>Price</h3>
      <div className='inline'>
        <input onChange={minPrice} type='number'/>
        <span>to</span>
        <input onChange={maxPrice} type='number'/>

      </div>
    </div>
  )
}

export default SideBar;
