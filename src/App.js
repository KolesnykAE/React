import './App.css';
import {BrowserRouter as Router, Link, Route, Switch,} from 'react-router-dom';
import Users from "./components/users/Users";
import UserDetails from "./components/user-details/UserDetails";

function App() {
    return (
        <Router>
            <div>
                <Link to={'/users'}>users</Link>

                <Switch>

                    <Route exact path={'/users'} component={Users}/>
                    <Route path={'/users/:id'} component={UserDetails}/>

                </Switch>
            </div>
        </Router>

    );
}

export default App;
