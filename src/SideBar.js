import React from 'react';
import './SideBar.css'

const SideBar = ({minPrice, maxPrice, changeSearch, minPass, maxPass, minFreight, maxFreight})=>{
  return (
    <div>
      <h3 className='mb0'>Price</h3>
      <div className='inline'>
        <input className='mb1 mt1' onChange={minPrice} type='number'/>
        <span className='mb1 mt1'>to</span>
        <input className='mb1 mt1' onChange={maxPrice} type='number'/>

      </div>
      <h3 className='mb0'>Name</h3>
      <div className='inline'>
        <input className='mb1 mt1' type='text' onChange={changeSearch} />
      </div>
      <h3 className='mb0'>Passengers</h3>
      <div className='inline'>
        <input className='mb1 mt1' type='number' onChange={minPass} />
        <span className='mb1 mt1'>to</span>
        <input className='mb1 mt1' type='number' onChange={maxPass}/>
      </div>
      <h3 className='mb0'>Freight</h3>
      <div className='inline'>
        <input className='mb1 mt1' type='number' onChange={minFreight} />
        <span className='mb1 mt1'>to</span>
        <input className='mb1 mt1' type='number' onChange={maxFreight}/>
      </div>
    </div>
  )
}

export default SideBar;
