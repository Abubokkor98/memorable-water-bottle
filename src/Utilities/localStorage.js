const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString){
        return JSON.parse(storedCartString);
    }
    else{
        return [];
    }
}

const setCartToLocalStorage = (cart) => {
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringify);

}

const addCartToLocalStorage = (id) =>{
    const cart = getStoredCart();
    cart.push(id);
    // set/save cart to local storage
    setCartToLocalStorage(cart);
}

export {addCartToLocalStorage};