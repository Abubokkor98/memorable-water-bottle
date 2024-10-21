import React, { useEffect, useState } from 'react'
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addCartToLocalStorage, getStoredCart, removeCartFromLOcalStorage } from '../../Utilities/localStorage';
import Cart from '../Cart/Cart';

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
      const storedCart = getStoredCart();
      console.log(storedCart, bottles);

      const savedCart = []
      for(const id of storedCart){
        console.log(id);
        const bottle = bottles.find(bottle=> bottle.id ===id)
        if(bottle){
          savedCart.push(bottle)
        }
      }
      console.log(savedCart);
      setCart(savedCart);
    }
    },[bottles])

    const handleAddToCart = (bottle) =>{
      const newCart = [...cart, bottle];
      setCart(newCart);
      // all to local storage
      addCartToLocalStorage(bottle.id);
    }

    const handleRemoveFromCart = (id)=>{
      //1- visual cart remove
      const remainingCart = cart.filter(bottle => bottle.id !==id);
      setCart(remainingCart)
      //2- remove from local storage
      removeCartFromLOcalStorage(id);
    }

  return (
    <div>
        <h2>Available Bottles: {bottles.length}</h2>
        <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
        
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
