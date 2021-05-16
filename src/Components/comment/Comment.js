import {Link} from "react-router-dom";

export default function Comment({item, url}) {
    return (
        <div>
            {item.name}
            <Link to={url + '/' + item.id}> -> Comment details</Link>
        </div>
    );
}