import React, { useContext } from 'react'
import { CartContext } from './context/GlobalCart';

function Sidebar() {
    const context = useContext(CartContext);


    const descending = ()=>{
        context.highToLow();
    }
    const ascending = ()=>{
        context.lowToHigh();

    }

    const clearFilter = ()=>{
        context.clearSort();
    }
    return (
        <div className="col-sm-3 col-12 side-bar">
            <h5 className='pt-2'>Filter</h5>
            <ul className='list bg-dark py-2'>
                <form >
                    <li><input type="radio" checked={context.sort==='high' ? true: false} onChange={descending} name="group1" id="high-to-low" />&nbsp;<label htmlFor="high-to-low">high-to-low</label></li>
                    <li><input type="radio" checked={context.sort==='low' ? true: false} onChange={ascending} name="group1" id="low-to-high" />&nbsp;<label htmlFor="low-to-high">low-to-high</label></li><br/>
                    <button className='btn btn-light btn-sm mt-3' onClick={clearFilter} type="reset">Clear</button>

                </form>

            </ul>
        </div>
    )
}

export default Sidebar