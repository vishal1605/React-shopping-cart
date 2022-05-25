import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/GlobalCart';

function Header() {
    const context = useContext(CartContext);

    const removeCart = (e) => {
        context.removeFromCart(Number(e.target.value));
    }

    const searchData = (e) => {
        context.searchQuery(e.target.value);
    }


    return (
        <div className="row nav">
            <div className="col">
                <div className="logo">
                    <h1><Link className='text-light' style={{ "textDecoration": "none" }} to='/'>Cart</Link></h1>
                </div>
                <div className="search-bar">
                    <input className="form-control me-2" onChange={searchData} type="search" placeholder="Search" aria-label="Search" />

                </div>

                <div className="cart-section">
                    <div className="btn-group">
                        <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                            <i className="fa-solid fa-cart-plus"></i>&nbsp;
                            <span>{context.cart.length}</span>
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end text-center" style={{ minWidth: 250 + "px" }} >
                            {(context.cart.length === 0) ?
                                <li><h5 className="dropdown-item">Cart is empty</h5></li> :
                                context.cart.map(obj => {
                                    const { id, image, title, price} = obj;
                                    return (
                                        <li className='mb-2' key={id}>
                                            <div className="dropdown-item cart-products">
                                                <div className="img">
                                                    <img src={image} alt="" width={100 + "%"} height={100 + "%"} />
                                                </div>
                                                <div className="desc me-4 ms-1">
                                                    <h6 className='m-0'>{title.substring(1,15)}</h6>
                                                    <small>{price}</small>
                                                </div>
                                                <div className="btn-action">
                                                    <button value={id} onClick={removeCart} className="btn btn-danger btn-sm"><i className="fa-solid fa-trash"></i></button>
                                                </div>

                                            </div>
                                        </li>
                                    )
                                })
                            }

                            <li><Link className="btn btn-primary" style={{ "width": "200px" }} to="/cart">Go To Cart</Link></li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header