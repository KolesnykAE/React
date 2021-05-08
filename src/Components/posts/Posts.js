import {useEffect, useState} from 'react';
import Post from "../post/Post";
import './Posts.css';

export default function Posts() {

    let [posts, setPosts] = useState([]);
     let [singlePost, setSinglePost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts([...value]);
            });
    },[]);

    const search = (id) => {
        let findSinglePost = posts.find(value => value.id === id);
        console.log(findSinglePost);
        setSinglePost(findSinglePost)
    }

    return (
        <div className={'wrap'}>
            <div className={'posts-box'}>
                {
                    posts.map(value => <Post
                        key={value.id}
                        item={value}
                        search={search}/>)
                }
            </div>

            <div className={'single-post-box'}>
                {
                    singlePost ? (<div>{singlePost.id} - {singlePost.body}</div>) : (<div>post not defined</div>)
                }

            </div>

        </div>
    )
}