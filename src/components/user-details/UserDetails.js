import {useEffect, useState} from "react";

export default function UserDetails(props) {

    let {match: {params: {id}}} = props;

    let [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://reqres.in/api/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser({...value.data})
            })
    }, [id]);

    return (
        <div>
            {user && <div>User Id: {user.id}</div>}
            {user && <h2>{user.first_name} {user.last_name}</h2>}
            {user && <div>{user.email}</div>}
            {user && <img src={user.avatar} alt="Avatar"/>}

        </div>
    );
}
