import './characterComponent.css';

function CharacterComponent(props) {
    console.log(props);

    // let cls = '';
    // if (props.name === 'Alina') {
    //     cls = 'Alina-class';
    // } else {
    //     cls = 'Anna-class';
    // }

    // лучше записать вариант 2

    let cls = props.name === 'Alina' ? 'Alina-class' : 'Anna-class';


    return <div className={cls}>
        <h1>
            {props.name}
        </h1>
        <img src={props.image} alt=""/>
        <p>
            {props.description}
        </p>
    </div>;
}

export default CharacterComponent;
