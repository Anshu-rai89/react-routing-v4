import axios from "axios";
import { BASE_URL, POST_ENDPOINT } from ".";

export const getAllPosts = async ()=> {
    try{
            const response = await axios(`${BASE_URL}/${POST_ENDPOINT}`)
            const posts = response.data;
            return posts
    } catch(err){
       console.error("Error in fetching all posts");
    }
}


export const getPost = async (postId)=> {
    try{
            const response = await axios(`${BASE_URL}/${POST_ENDPOINT}/${postId}`)
            const post= response.data;
            return post;
    } catch(err){
       console.error("Error in fetching all posts");
    }
}

export const deletePost = async (postId)=> {
    try{
            const response = await axios(`${BASE_URL}/${POST_ENDPOINT}/${postId}`, {method: 'DELETE'})
            const post= response.data;
            return post;
    } catch(err){
       console.error("Error in fetching all posts");
    }
}

export const createPost = async (post)=> {
    try{
            const response = await axios(
                `${BASE_URL}/${POST_ENDPOINT}`, 
                {
                    method: 'POST',
                    headers: { "Content-Type": "application/json"},
                    data: JSON.stringify(post)
                }
            )
          
            return response.data;
    } catch(err){
       console.error("Error in creating posts");
    }
}