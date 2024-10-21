import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

export default function Bottles() {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=> res.json())
        .then(data=>setBottles(data))
    },[])

    const handleAddToCart = (bottle) =>{
      const newCart = [...cart, bottle];
      setCart(newCart);
    }

  return (
    <div>
        <h2>Available Bottles: {bottles.length}</h2>
        <h4>Cart: {cart.length}</h4>
        <div className='bottle-container'>
        {
            bottles.map(bottle=><Bottle
              key={bottle.id} bottle={bottle}
              handleAddToCart={handleAddToCart}
            ></Bottle>)
        }
        </div>
    </div>
  )
}
