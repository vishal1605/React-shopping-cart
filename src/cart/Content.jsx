import React, { useContext, useState } from 'react'
import { CartContext } from './context/GlobalCart';

function Content() {
    const context = useContext(CartContext);

    const [loading, setLoading] = useState(true);

    const addHandler = (e) => {
        const singleProduct = context.data.find(obj => {
            return obj.id === Number(e.target.value);
        })
        
        context.addCart(singleProduct);


    }

    const removeHandler = (e)=>{
        context.removeFromCart(Number(e.target.value));

    }
    return (
        <div className="col-sm-9 col-12 content">
            <div className="row cards">
                {loading &&
                    <div className="col-12 loader">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <h3 className='wait'>Please wait...</h3>
                    </div>
                }
                {context.data.map(product => {
                    const { id, image, title, price } = product;

                    return (
                        <div className="col-sm-12 col-md-4 col-lg-3 mb-2" key={id}>
                            <div className="card">
                                <img src={image} className="card-img-top" onLoad={() => setLoading(false)} alt="..." style={{ height: 280 + "px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">{title.substring(0, 12)}</h5>
                                    <p className="card-text">{`$ ${price}`}</p>
                                    {context.cart.some(obj=>obj.id===id)?(
                                        <button value={id} onClick={removeHandler} className="btn btn-danger">Remove from Cart</button>
                                    ):(
                                        <button value={id} onClick={addHandler} className="btn btn-primary">Add to Cart</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Content