import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export default function CommentDetails(props) {
    let {match: {params: {id}}} = props;

    let [comment, setComment] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/' + id)
            .then(value => value.json())
            .then(value => {
                setComment({...value});
            });
    },[comment]);

    return (
        <div>
            {comment && <h3>{comment.id} - {comment.name} -> {comment.body}</h3>}

        </div>
    )
}