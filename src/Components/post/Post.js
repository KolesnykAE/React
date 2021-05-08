export default function Post({item, search}) {
    return (
        <div>
            {item.id}
            -{item.userId}
            -{item.title};
            <button onClick={() => search(item.id)}>posts</button>
        </div>
    );
}