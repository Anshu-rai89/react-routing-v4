import React from 'react';
import { Link } from 'react-router-dom';

function Post ({post}) {
    return (
        <Link key={post.id} to={`/posts/${post.id}`}>
                    <li >{post.title}</li>
        </Link>
    );
}

export default React.memo(Post);