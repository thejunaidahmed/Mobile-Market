import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../Card/Card'
import './Cart.css'

function Cart() {
  const cartItems = useSelector((state) => state.cart)
  const totalPrice = cartItems.reduce((total, item) => total + parseInt(item.price), 0)

  return (
    <div className='cart-container'>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className='empty-cart'>
          <h2>Your cart is empty</h2>
          <p>Add some products to your cart!</p>
        </div>
      ) : (
        <div className='cart-items'>
          {cartItems.map((item) => (
            <Card 
              key={item.id} 
              name={item.name} 
              price={item.price} 
              image={item.image} 
              id={item.id}
            />
          ))}
            <div className='cart-summary'>
            <p>Total Products: {cartItems.length}</p>
            <p>Total Price: Rs. {totalPrice.toLocaleString()}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart