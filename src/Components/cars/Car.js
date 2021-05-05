export default function Car(props) {
    let {producer, model, year, color, type, engine, volume, power, use} = props;
    return (
        <div>
            <h2>{producer} {model} {year}</h2>
            <div>color: {color} - type: {type} - new: {use.toString()}</div>
            <div>{engine} {volume} {power}</div>

        </div>
    );

}