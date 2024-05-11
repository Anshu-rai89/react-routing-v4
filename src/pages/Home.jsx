import React, { useEffect, useState } from 'react';
import Product from './Product';
import { createPost, getAllPosts } from '../services/post.service';
import { Link } from 'react-router-dom';
import Post from './Post';

function Home(props) {
    const [ posts, setPosts] = useState([]);
    const [inputPost , setInputPostValue] = useState("");

    const addPostHandleOnClick = async () => {
        try{
        const post = {
            title: inputPost.slice(0,5),
            body: inputPost,
            id: 134,
            userId: 12345
        }

        await createPost(post);
        setPosts([post, ...posts])
        setInputPostValue('');
    }catch(err){
        console.error(err);
    }
    }
    useEffect(()=> {
         const getPosts = async () => {
            const posts = await getAllPosts();
            setPosts(posts.slice(0,10));
         };

         getPosts();

    }, []);

    console.log("Posts", posts);
    return (
        <div>
            <h4>Welcome to Home page</h4>
            <input 
                value ={inputPost} 
                placeholder='write something..' 
                onChange={(e)=> setInputPostValue(e.target.value)}
            /> 
            <button onClick={()=> {
                addPostHandleOnClick();
            }}>add post</button>
            {posts.map(post => {
                return (
                    <Post key = {post.id} post={post}/>
                )
            })}
        </div>
    );
}

export default Home;