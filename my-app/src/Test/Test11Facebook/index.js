import React, {useState} from 'react'
import Navbar from './Navbar'
import Input from './Input'
import Post from './Post'

import './test11.css'

let id=1;

function AddPost(){
    const [posts,setPosts] = useState([]);

    function addPost(title){
        const newPost ={id, title};
        setPosts([newPost,...posts]);
        id += 1;

    }

    function deletePost(id){
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
    }

return(
    <div>
        <Navbar/>
        <Input addPost={addPost}/>
        {posts.map((post) => (
            <Post key={post.id} id={post.id} title={post.title} deletePost={deletePost}/>
        ))}
    </div>
)
}
export default AddPost