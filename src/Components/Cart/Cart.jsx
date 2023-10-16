//6412145426:AAGDk5GMUElRc1s_kmEAvXI9FX4wEAGNeds
import React from 'react'
import "./Cart.css"
import Button from '../Button/Button'

function Cart({cartItems, onCheckout}) {
  const totalPrice = cartItems.reduce((a,c) => a + c.price * c.quantity, 0);
  return (
    <div className='cart__container'>
      {cartItems.lenght ===0 ? "No Items in cart" : ''}
      <br/>
      <span> Total price: ${totalPrice.toFixed(2)}</span>
      <Button title={`${cartItems.lenght === 0 ? "Order !":"Checkour"}`}
      type={"checkout"} disable={cartItems.lenght === 0 ? true : false}
      onClick={onCheckout}/>
    </div>
  )
}

export default Cart