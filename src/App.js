import './App.css';
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';
import Home from "./сomponents/home/Home";
import Posts from "./сomponents/posts/Posts";
import Users from "./сomponents/users/Users";
import UserDetails from "./сomponents/user-details/UserDetails";
import {createContext} from "react";

export let MyContext = createContext('');

function App() {
    return (
        <Router>
            <MyContext.Provider value={'okten'}>
                <div>
                    <Link to={'/'}>home page</Link>
                    <br/>
                    <Link to={'/users'}>users page</Link>
                    <br/>
                    <Link to={'/posts'}>posts page</Link>
                    <br/>

                    <hr/>
                    <Switch>
                        <Route exact path={'/'} component={Home}/>

                        <Route path={'/users'} component={Users}/>
                        <Route exact path={'/posts'} component={Posts}/>

                    </Switch>
                    <hr/>

                </div>
                <div>
                        <Posts/>

                </div>
            </MyContext.Provider>

        </Router>
    );
}

export default App;
