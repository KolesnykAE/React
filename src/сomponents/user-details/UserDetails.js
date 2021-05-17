import {useParams} from "react-router-dom"
import {useEffect, useState} from "react";

export default function UserDetails({checkedId}) {
    const {id} = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (+id === checkedId) {
            fetch('https://jsonplaceholder.typicode.com/users/' + id)
                .then(value => value.json())
                .then(value => {
                    setUser({...value});
                });
        }
    }, [id]);

    return (
        <div>
            {
                +id === checkedId && user && <h2>{user.id} - {user.name} - {user.email}</h2>
            }
        </div>
    )
}
