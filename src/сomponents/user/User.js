import {Link} from "react-router-dom";

export default function User({item, url}) {
    let path = url + '/' + item.id;
    return (
        <div>
            {item.name}
            <Link to={{pathname: path, state: item, search: "?sort=name",}}> -> <button>Comment details</button></Link>
        </div>
    );
}