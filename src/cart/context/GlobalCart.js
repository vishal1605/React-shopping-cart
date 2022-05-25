import React, { createContext, useEffect, useState } from "react";
// import CartContext from "./cartContext";

const CartContext = createContext();

const GlobalCart = (props) => {
    const [data, setData] = useState([]);
    const [data1, setData1] = useState([]);
    const [count, setCount] = useState(0);
    const [cart, setCart] = useState([]);
    const [sort, setSort] = useState("");

    function addCart(a) {
        const singleProduct = { ...a, quantity: 1 };
        setCart(pre => ([...pre, singleProduct]));

    }
    function removeFromCart(a) {
        const product = cart.find(obj => obj.id === a);
        const index = cart.indexOf(product);
        cart.splice(index, 1);
        setCart([...cart]);


    }


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then(data1 => {
                
                setData(data1);
                setData1(data1);
                setCount(pre => pre + 1);
            })
            .catch(err => console.log(err))

    }, []);

    function highToLow() {
        setSort('high');
        const newData = [...data];
        const highValue = newData.sort((a, b) => b.price - a.price);
        
        setData(highValue);
        
    }

    function lowToHigh() {
        setSort('low')
        const newData = [...data];
        const lowValue = newData.sort((a, b) => a.price - b.price);
        
        setData(lowValue);
    }

    function clearSort(){
        setSort('');
        setData(data1);

    }
    function searchQuery(para){
        let searchData = [];
        if (para==='') {
            setData(data1)
            
        } else {
            searchData = data.filter(obj => {
                return obj.title.toLowerCase().includes(para.toLowerCase());
            });
            setData(searchData);
            
        }

    }

    function quantityHandle(id, quantity){
        let product = cart.find(obj=>obj.id===id);
        product.quantity = quantity;
        // console.log(product);
        let index = cart.indexOf(product);
        // console.log(index);
        cart.splice(index,1, product);

        setCart([...cart]);


    }

    return (
        <CartContext.Provider value={{ data, addCart, removeFromCart,
         highToLow, lowToHigh, clearSort, searchQuery, quantityHandle, count, cart,sort }}>
            {props.children}
        </CartContext.Provider>
    )

}

export { GlobalCart, CartContext };