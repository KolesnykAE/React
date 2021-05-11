import {useEffect, useState} from "react";
import {getUsers} from "../../services/api.service";
import User from "../user/User";

export default function Users () {
    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState(null);


    useEffect(() => {
        getUsers().then(value => setUsers([...value.data]));
    },[]);

    const choseUser = (id) => {
        let u = users.find(value => value.id === id);
        setChosenUser(u);
    }

    return (
        <div>
            <div>
                {chosenUser && <div>{chosenUser.id} - {chosenUser.email}</div>}
            </div>
            <div>
                {
                    users.map(value => <User
                        choseUser = {choseUser}
                        key={value.id}
                        item={value}/>)
                }
            </div>


        </div>
    )
}