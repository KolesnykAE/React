import './App.css';
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';
import Home from "./сomponents/home/Home";
import Users from "./сomponents/users/Users";
import Posts from "./сomponents/posts/Posts";
import PostDetails from "./сomponents/post-details/PostDetails";
import Comments from "./сomponents/comments/Comments";


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
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/users'} component={Users}/>
                    <Route exact path={'/posts/:id'} component={PostDetails}/>
                    <Route path={'/posts'} component={Posts}/>

                    <Route path={'/comments'} render={(props) => {
                        return <Comments{...props}/>
                    }}/>
                </Switch>
                <hr/>
            </div>
        </Router>

    );
}

export default App;
