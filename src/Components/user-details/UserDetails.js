import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";

export default function UserDetails(props) {
    // 1-й способ достать парамс
    // let params = useParams();
    // console.log(params);

    // 2-й способ достать парамс
    let {match: {params: {id}}} = props;

    let [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(value => value.json())
            .then(value => {
                setUser({...value});
            });

    }, [user]);

    return (
        <div>
            {user && <h2>{user.id} - {user.name} - {user.email}</h2>}
        </div>
    )
}