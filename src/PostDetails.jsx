import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deletePost, getPost } from './services/post.service';

function PostDetails(props) {
    const [ post, setPost] = useState(null);
    const {postId} = useParams();
    const navigate = useNavigate();

    const getPostFromService = async (postId) => {
        const post = await getPost(postId);
        setPost(post);
    }

    const handleDeleteOnClick = async()=> {
        try{
            await deletePost(postId);
            console.log("Post deleted");
            navigate("/");
        }catch(err){
            console.error(err);
        }
    }

    useEffect(()=> {
        getPostFromService(postId);
    }, []);


    return (
        <div>
            {post ?  
                <div> 
                    <p>{post.title}</p>
                    <div>{post.body} </div>
                    <button onClick={handleDeleteOnClick}> Delete</button>
                     <button onClick={()=> navigate(-1)}> Go Back</button>
                 </div> 
                    : 
                        <h3>Loading ....</h3>
                    }
        </div>
    );
}

export default PostDetails;