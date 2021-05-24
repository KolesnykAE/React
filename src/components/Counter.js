import {useDispatch, useSelector} from "react-redux";

export default function Counter() {
    // const Counter = () => {}
    const counter = useSelector(({counter}) => counter);
    const dispatch = useDispatch();


    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => {
                dispatch({type:'INC', payload: 1})
            }}>increment +1</button>
            <button onClick={() => {
                dispatch({type: 'DEC', payload: 1})
            }}>decrement -1</button>
            <button onClick={() => {
                dispatch({type: 'INC', payload: 100})
            }}>increment +100</button>
            <button onClick={() => {
                dispatch({type: 'DEC', payload: 100})
            }}>decrement -100</button>
        </div>
    )
}

