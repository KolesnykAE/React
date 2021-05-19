import {Link} from "react-router-dom";

export default function User({item, url}) {
    let path = url + '/' + item.id;

    return (
        <div>
            <div>{item.first_name} {item.last_name}</div>
            <img src={item.avatar} alt="avatar"/>

            <Link to={path}>details</Link>

        </div>
    );
}

