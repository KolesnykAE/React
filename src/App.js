import './App.css';
import Users from "./Components/users/Users";
import Posts from "./Components/posts/Posts";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <div>
            {/*<Users/>*/}
            {/*<Posts/>    */}

            <Router>
                <Link to={'/users'}>to users</Link>
                <br/>
                <Link to={'/posts'}>to posts</Link>
                <Switch>
                    <Route path={'/users'} render={() => (<Users/>)}/>
                    <Route path={'/posts'} render={() => (<Posts/>)}/>




                </Switch>



            </Router>

        </div>
    );
}

export default App;