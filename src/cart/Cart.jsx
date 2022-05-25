import React from 'react'
import Checkout from './Checkout'
import SingleProduct from './SingleProduct'

function Cart() {
  return (
    <div className="row cart-section">
        <SingleProduct />
        <Checkout />
    </div>
  )
}

export default Cart