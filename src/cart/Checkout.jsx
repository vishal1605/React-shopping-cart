import React, { useContext } from 'react'
import { CartContext } from './context/GlobalCart';

function Checkout() {
  const context = useContext(CartContext);

  return (
    <div className="col-sm-3 col-12 order-sm-2 order-1 total mt-2 text-light">
      <h3>SubTotal ({context.cart.map((obj)=>obj.quantity).reduce((a,b)=>a+b,0)}) items</h3>
      <h5 className='mb-5'>Total : {context.cart.map((obj)=>obj.quantity*obj.price).reduce((a,b)=>a+b,0)}</h5>
      <button className="btn btn-warning w-100 mb-2">Checkout</button>
    </div>
  )
}

export default Checkout