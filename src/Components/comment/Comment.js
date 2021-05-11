export default function Comment({item, choseComment}) {
    return (
        <div>
            <div>{item.name}</div>
            <button onClick={()=> choseComment(item.id)}>details</button>

        </div>
    );
}