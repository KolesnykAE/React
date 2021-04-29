import './characterComponent.css';

function CharacterComponent(props) {
    console.log(props);
    return <div>
        <img src={props.image} alt=""/>
        <h1>
            {props.name}
        </h1>
        <p>
            {props.description}
        </p>
    </div>;
}

export default CharacterComponent;
