import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { load } from 'cheerio';

function UserDetails(props) {
    const [loading, setLoading]= useState(true);

    const [user, setUser]= useState(null);
    const {userId} = useParams();
    const navigate = useNavigate();
    console.log("user id", userId);

    const fetchUserDetailsById = async ()=> {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        setUser(response.data);
        setLoading(false);
    }

    useEffect(()=> {
        fetchUserDetailsById();
    },[]);

    console.log("User data", user);

    if(loading) {
        return <h4>loading user details...</h4>
    }
    return (
        <div>
            Users Details 
           {user && <div>
                <p>{user.name}</p>
                <p>{user.email}</p>

                <button onClick={()=> navigate(-1)}>go back</button>
            </div>}

        </div>
    );
}

export default UserDetails;