import { useEffect, useState } from "react";
import { getAllPosts } from './fetchAPI';
import { isEmpty } from './validation';

function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getAllPosts().then((posts) => {
            console.log(posts); 
            setPosts(posts);
        })
    }, []);

    return (
        <div>
        {
            isEmpty(posts) ? 
            (
                <p>Loading...</p>
            ) 
            : 
            (
                posts.map(post => (
                    <div className="post-item" key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                ))
            )
        }
        </div>
    )

}

export default Posts;