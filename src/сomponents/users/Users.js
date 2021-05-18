import {useEffect, useState,} from "react";
import {Route} from "react-router-dom";
import User from "../user/User";
import UserDetails from "../user-details/UserDetails";


export default function Users(props) {
    let {match:{url}} = props;

    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });
    },[]);

    return (
        <div>
            <Route path={'/users/:id'} component={UserDetails}/>
            {
                users.map(value => <User key={value.id} item={value} url={url}/>)
            }
        </div>
    );
}