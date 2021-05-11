import {useEffect, useState} from "react";
import {getComments} from "../../services/api.service";
import Comment from "../comment/Comment";

export default function Comments() {
    let [comments, setComments] = useState([]);
    let [chosenComment, setChosenComment] = useState(null);

    useEffect(() => {
        getComments().then(value => setComments([...value.data]));
    }, []);

    const choseComment = (id) => setChosenComment (comments.find(value => value.id === id));


    return (
        <div>
            <div>
                {chosenComment && <div>{chosenComment.id} - {chosenComment.name}</div>}
            </div>
            <div>
                {
                    comments.map(value=> <Comment
                        choseComment = {choseComment}
                        key={value.id}
                        item={value}/>)
                }
            </div>

        </div>

    )
}