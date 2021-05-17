import {useEffect, useState,} from "react";
import Comment from "../comment/Comment";
import {Route} from "react-router-dom";
import CommentDetails from "../comment-details/CommentDetails";

export default function Comments(props) {
    let {match:{url}} = props;

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            });
    },[]);

    return (
        <div>
            <Route path={'/comments/:id'} component={CommentDetails}/>
            {
                comments.map(value => <Comment key={value.id} item={value} url={url}/>)
            }
        </div>
    );
}
