import {Link, Route} from "react-router-dom";
import UserDetails from "../user-details/UserDetails";

export default function User({item, url}) {
    return (
        <div>
            {item.name}
            <Link to={url + '/' + item.id}> -> user details</Link>
            {
                <Route path={'/users/:id'} >
                    <UserDetails checkedId={item.id}/>
                </Route>
            }
        </div>
    );
}
