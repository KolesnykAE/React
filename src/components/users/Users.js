import {useEffect, useState} from "react";
import User from "../user/User";
import {Link} from "react-router-dom";

export default function Users(props) {
    let {match: {url}} = props;

    let [users, setUsers] = useState([]);
    let [numPage, setNumPage] = useState(1);
    let [totalPages, setTotalPages] = useState(1);

    function newPage() {
        if (numPage > totalPages) {
            return;
        }
        setNumPage(numPage + 1)
    }

    function PreviousPage() {
        if (numPage === totalPages) {
            return;
        }
        setNumPage(numPage - 1)
    }

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=' + numPage)
            .then(value => value.json())
            .then(value => {
                setUsers([...value.data])
            })
    }, [numPage]);

    return (
        <div>
            <div>
                {
                    users.map(value => <User key={value.id} item={value} url={url}/>)
                }
            </div>
            <div>
                <Link to={`/users`} onClick={PreviousPage}>
                    <button>Previous page</button>
                </Link>
                <Link to={`/users`} onClick={newPage}>
                    <button>Next page</button>
                </Link>
            </div>

        </div>
    );
}
