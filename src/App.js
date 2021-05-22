import './App.css';
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    setIsLoading,
    setPosts,
    resetIsLoading,
    setError
} from './redux';


const Posts = () => {
    // const store = useSelector((store) => store); первоначальный а дальше исправили на
    const {isLoading, posts, error} = useSelector(({isLoading, posts, error}) => ({
        isLoading,
        posts,
        error,
    })
    );
    const dispatch = useDispatch();

    const fetchPosts = async() => {
        try {
            dispatch(setIsLoading());
            const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
            const dataJson = await responce.json();

            dispatch(setPosts(dataJson));

        } catch (e) {
            dispatch(resetIsLoading());
            dispatch(setError("Failed to fetch data"));
        }
    };

    React.useEffect(() => {
        fetchPosts();
    }, []);

    if(error) {
        return (<h1>{error}</h1>)


    }
    if  (isLoading) {
        return (
            <h1>Loading!!!</h1>
        )
    }

    return (
        <div>
            {posts.map(posts => (
            <p key={posts.id}>{posts.title} - {posts.body} - </p>
            ))}
    </div>
    );

}

function App() {
    return (
        <div>
           <Posts/>
        </div>
    );
}

export default App;
