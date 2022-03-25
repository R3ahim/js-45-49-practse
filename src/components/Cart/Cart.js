import React from 'react';
import './Cart.css'

const Cart = (props) => {
const {cart} = props;
// console.log(cart);
// console.log(cart)

let total = 0;
let shipping = 0;

// console.log(shipping)
for(const product of cart){
    total = product.price + total;
    shipping = product.shipping + shipping;
    // console.log(shipping);
}
const tax = parseFloat((total * 0.1).toFixed(2));
 
const grandTotal = tax + total + shipping;
    
    return (
        <div className='cart'>
      <h3>Order Summery</h3>
      <p>Selected items: {props.cart.length}</p>
      <p>Total Price :${total}</p> 
      <p>Total Shipping: ${shipping} </p>
      <p>Tax: ${tax}</p>
      <h4>Grand Total: ${grandTotal} </h4>
   
        </div>
    );
};

export default Cart;