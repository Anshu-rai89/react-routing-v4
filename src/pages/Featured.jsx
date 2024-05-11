import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

function Featured(props) {
    const featuredProducts = ['Cake', 'Icecream'];
    const [searchParams, setSearchParams] = useSearchParams({});

    useEffect(()=> {
        setSearchParams({});
    },[])

    return (
        <div>
            List of Featured products
            {featuredProducts.map((product)=> <li key={product}>{product}</li>)}
        </div>
    );
}

export default Featured;