import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import Home from "./components/home/Home";
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/post-details/PostDetails";
import Comments from "./components/comments/Comments";
import CommentDetails from "./components/comment-details/CommentDetails";


function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>home page</Link>
                <br/>
                <Link to={'/users'}>users page</Link>
                <br/>
                <Link to={'/posts'}>posts page</Link>
                <br/>
                <Link to={'/comments'}>comment page</Link>

                <hr/>
                <Switch>
                    {/*первый вариант плохой потому что не имеет доступ к истории*/}
                    <Route exact path={'/'}>
                        <Home/>
                    </Route>
                    {/*2й*/}
                    <Route path={'/users'} component={Users}/>
                    {/*3й*/}
                    {/*<Route path={'/posts'} render={(props)=> {*/}
                    {/*    console.log(props)*/}
                    {/*    return <Posts/>;*/}
                    {/*}}/>*/}
                    <Route exact path={'/posts/:id'} component={PostDetails}/>
                    <Route path={'/posts'} component={Posts}/>
                    <Route exact={true} path={'/comments/:id'} component={CommentDetails}/>
                    <Route path={'/comments'} component={Comments}/>


                </Switch>


                <hr/>
            </div>
        </Router>

    );
}

export default App;
