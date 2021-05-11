import './App.css';
import Users from "./Components/users/Users";
import Comments from "./Components/comments/Comments";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';


function App() {
    return (
        <div>
           <Router>
               <div>
                   <Link to={'users'}> to users</Link>
                   <br/>
                   <Link to={'comments'}> to comments</Link>

                   <Switch>
                       {/*способ1*/}
                       {/*<Route path={'/users'} component={Users}/>*/}

                       {/*лучше способ 2*/}
                       <Route path={'/users'} render={(props)=> {
                           console.log(props);
                           return <Users/>
                       }}/>

                       {/*<Route path={'/comments'} render={()=> <h3>posts</h3>}/>*/}
                       <Route path={'/comments'} component={Comments}/>


                   </Switch>
                   {/*<Comments/>*/}
               </div>
           </Router>

        </div>
    );
}

export default App;