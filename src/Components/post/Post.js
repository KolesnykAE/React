import {Link} from "react-router-dom";

export  default function Post({item, url}) {

    return (
        <div>
            {item.title}
            <Link to={url + '/' + item.id}> -> Post details</Link>
        </div>
    );

}