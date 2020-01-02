import React from 'react';
import './SideBar.css'

const SideBar = ({minPrice, maxPrice, changeSearch, minPass, maxPass})=>{
  return (
    <div>
      <h3>Price</h3>
      <div className='inline'>
        <input onChange={minPrice} type='number'/>
        <span>to</span>
        <input onChange={maxPrice} type='number'/>

      </div>
      <hr />
      <h3>Name</h3>
      <div className='inline'>
        <input type='text' onChange={changeSearch} />
      </div>
      <h3>Passengers</h3>
      <div className='inline'>
        <input type='number' onChange={minPass} />
        <span>to</span>
        <input type='number' onChange={maxPass}/>
      </div>
    </div>
  )
}

export default SideBar;
