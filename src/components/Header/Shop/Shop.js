import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../../utilities/fakedb';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts]=useState([]);
    const [cart,setCart] =useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[]);
    // if i load data different area not of my code 
    // so it need to use {useEffect}
    useEffect(()=>{
        const storedCart = getStoredCart();
         const savedCart =[];
        // there is only object for loop
       for(const id in storedCart){
          const addedProduct = products.find(product =>product.id ===id);
        if(addedProduct){
          const quantity = storedCart[id];
         addedProduct.quantity = quantity;
         savedCart.push(addedProduct)
        }
       
       };
       setCart(savedCart)

    },[products])
    const handleAddToCart =(product)=>{
       const newCart = [...cart,product ];
       setCart(newCart);
       addToDb(product.id)
    }
    return (
        <div className='shop-container'>
          <div className='products-container'>
         {
             products.map(product=>
                  <Product 
                  product={product}
                  key = {product.id}
                  handleAddToCart={handleAddToCart}

                  >

                  </Product>
             )
         }
          </div>
          <div className='cart-container'>
         <Cart cart={cart}></Cart>
          </div>
        </div>
    );
};

export default Shop;