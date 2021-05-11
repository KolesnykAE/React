import './User.css'

export default function User({item, choseUser}) {
    return (
        <div>
            <div>{item.username}</div>
            <img src="https://img1.freepng.ru/20180418/hpw/kisspng-ice-skating-figure-skating-club-roller-skating-cupcake-clipart-5ad800b8301db9.7680574415241054001971.jpg" alt=""/>
            <div>
                <button onClick={() => choseUser(item.id)}>details</button>
            </div>
        </div>
    );
}