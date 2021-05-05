import {useState} from "react";

export default function Counter() {
    // eslint-disable-next-line no-undef
    let [counter, setCounter] = useState(0);

    const increment = () => {
       setCounter(++counter) ;
    };

    const decrement = () => {
        setCounter(--counter);
    };

    const reset = () => {
        setCounter(0);
    };

    return (
        <div>
            <h2>state is - ${counter}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>

        </div>
    )
}