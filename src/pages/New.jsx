import React from 'react';
import { useSearchParams } from 'react-router-dom';

function New(props) {
      const newProducts = ['Cookies', 'Coffee'];
      const [searchParams, setSearchParams] = useSearchParams({});
      const name = searchParams.get('name');
      console.log("Product name", name);

      const filteredProducts = newProducts.filter(product => product === name)
    return (
        <div>
            List of new products
            {filteredProducts.map((product)=> <li key={product}>{product}</li>)}
        </div>
    );
}

export default New;