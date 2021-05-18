import {useEffect, useState} from "react";
import {MyContext} from "../../App";

export default function UserDetails(props) {
    console.log(props.location.state)
    let {match: {params: {id}}, location:{state}} = props;

    let [user, setUser] = useState(null);

    useEffect(() => { setUser(state); },[id]);

    return (
        <div>
            {user && <h3>{user.id} - {user.name} - {user.email}</h3>}
            {/*{user && JSON.stringify(user)}*/}
            <hr/>
            <div>
                <MyContext.Consumer>
                    {
                        (val) => console.log(val)
                    }
                </MyContext.Consumer>
            </div>
            <hr/>
        </div>
    )
}




// чтобы не дедосить сервак нужно делать без fetch