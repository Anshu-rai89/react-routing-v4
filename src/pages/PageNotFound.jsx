import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound(props) {
    const navigate = useNavigate();
    return (
        <div>
            <h3>Page Not Found</h3>
            <button onClick={()=> {
                navigate('/');
            }}>Go Home</button>
        </div>
    );
}

export default PageNotFound;