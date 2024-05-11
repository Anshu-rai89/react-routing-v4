import React, { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

function Product(props) {
    const [name, setName] = useState("");
    return (
        <div>
            <h2>Products Page</h2>
            <div><input onChange={(e)=> setName(e.target.value)}/> <button>search</button></div>
            <nav>
                <NavLink to={ `/products/featured?name=${name}`} className='nav-items'>featured</NavLink>
                 <NavLink to= {`/products/new?name=${name}`} className='nav-items' >new
                 </NavLink>
               
            </nav>
              <Outlet />
        </div>
    );
}

export default Product;