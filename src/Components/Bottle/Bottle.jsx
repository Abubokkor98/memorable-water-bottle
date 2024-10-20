import React from 'react'
import './Bottle.css'

export default function Bottle({bottle}) {
    const {name, img, price}= bottle;
    console.log(bottle);
  return (
    <div className='bottle'>
        <h3>Bottle:{name}</h3>
        <img src={img} alt="" />
        <p>Price: ${price}</p>
        
    </div>
  )
}
