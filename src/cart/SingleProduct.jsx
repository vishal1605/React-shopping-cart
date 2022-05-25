import React, { useContext } from 'react'
import { CartContext } from './context/GlobalCart';

function SingleProduct() {

  const removeCart = (e) => {
    context.removeFromCart(Number(e.target.value));
  }
  const increaseQuantity = (e) => {
   
    context.quantityHandle(Number(e.target.id), Number(e.target.value));
  }

  const context = useContext(CartContext);
  return (
    <div className="col-sm-9 col-12 order-sm-1 order-2 products mt-2">
      <div className="row">
        {(context.cart.length===0)?<h1>Cart is empty! add some</h1>
        :context.cart.map(obj => {
          const { id, image, title, price, quantity } = obj;
          return (
            <div className="col-11 m-auto carts mb-2" key={id}>
              <img src={image} alt="..." />
              <h5>{title.substring(0, 15) + "..."}</h5>
              <h5>{price}</h5>

              <select className="form-select form-select-sm" id={id} onChange={increaseQuantity} style={{ "width": "100px" }} aria-label=".form-select-sm example">
                <option>{quantity}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <button value={id} onClick={removeCart} className="btn btn-danger btn-sm"><i className="fa-solid fa-trash"></i></button>

            </div>
          )
        })}

      </div>
    </div>
  )
}

export default SingleProduct