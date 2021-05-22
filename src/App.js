import './App.css';
import React from "react";
import {useSelector, useDispatch} from "react-redux";

const Counter = () => {
    const counter = useSelector(({counter}) => counter)


    return (
        <>
            <h1>counter: {counter}</h1>

        </>

    )
}

function App() {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState(0)

    return (
        <div className="App">
            <Counter/>
            <button onClick={() => {
                dispatch({type: 'INC'})
            }}>increment
            </button>
            <button onClick={() => {
                dispatch({type: 'DEC'})
            }}>decrement
            </button>
            <button onClick={() => {
                dispatch({type: 'RESET'})
            }}>reset
            </button>

            <input type="number" value={value} onChange={({target: {value}}) => setValue(value)}/>
            <button onClick={() => {
                dispatch({type: 'INC_CUSTOM', payload: Number(value)})
            }}>inc custom
            </button>
        </div>
    );
}

export default App;
