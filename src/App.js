import './App.css';
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';
import Home from "./Components/home/Home";
import Users from "./Components/users/Users";
import Posts from "./Components/posts/Posts";
import PostDetails from "./Components/post-details/PostDetails";
import Comments from "./Components/comments/Comments";
import CommentDetails from "./Components/comment-details/CommentDetails";


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
