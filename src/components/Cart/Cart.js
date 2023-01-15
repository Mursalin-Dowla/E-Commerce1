import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props
    let total = 0;
    let shipping = 0;
    let quantity=0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;

    }
    const tax = total*0.1;
    const grandTotal = total+shipping+ parseFloat(tax);
    return (
        <div className='cart'>
            <h4>Cart Summary</h4>
            <p>Total Added Items: {quantity}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Total Tax: {tax.toFixed(2)}</p>
            <h4>Grand Total: {grandTotal}</h4>
             {props.children}
        </div>
    );
};

export default Cart;