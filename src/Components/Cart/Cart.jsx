import React from 'react'
import './Cart.css'

export default function Cart({cart}) {
  return (
    <div>
        <h4>Cart: {cart.length}</h4>
        <div className='cart-container'>
        {cart.map(bottle=> <img src={bottle.img}></img>)}
        </div>
    </div>
  )
}
