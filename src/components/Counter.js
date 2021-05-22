import {useDispatch, useSelector} from "react-redux";

export default function Counter() {
    // const Counter = () => {}
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();


    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => {
                dispatch({type:'INC_1'})
            }}>increment +1</button>
            <button onClick={() => {
                dispatch({type: 'DEC_1'})
            }}>decrement -1</button>
            <button onClick={() => {
                dispatch({type: 'INC_100'})
            }}>increment +100</button>
            <button onClick={() => {
                dispatch({type: 'DEC_100'})
            }}>decrement -100</button>
        </div>
    )
}

