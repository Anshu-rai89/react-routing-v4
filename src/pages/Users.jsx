import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Users(props) {
const [users, setUsers] = useState([]);

    const fetchUsers = async ()=> {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        const users = response.data.slice(0,5);
        setUsers(users);
    }
    useEffect(()=> {
      fetchUsers()
    }, []);

    console.log("Users", users);
    return (
        <div>
               <h3>I am users page</h3>
              {users.map((user)=> <div>
                <Link key={user.name} to={`/users/${user.id}`}>{user.id} {user.name}</Link> </div>)}
        </div>
    );
}

export default Users;