import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addCartToLocalStorage, getStoredCart } from '../../Utilities/localStorage';

export default function Bottles() {

    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=> res.json())
        .then(data=>setBottles(data))
    },[])

    // load cart from local storage
    useEffect(()=>{
      console.log(bottles.length);
    if (bottles.length > 0){
      const StoredCart = getStoredCart();
      console.log(StoredCart);
    }
    },[bottles])

    const handleAddToCart = (bottle) =>{
      const newCart = [...cart, bottle];
      setCart(newCart);
      // all to local storage
      addCartToLocalStorage(bottle.id);
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
