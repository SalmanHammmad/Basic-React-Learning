import { useState } from "react";

export default function Counter() {
    let [count, setCount] = useState(0);

    console.log('State Refreshed!!!');

    const handleIncrement = () => (setCount((prevcount) => prevcount + 1));    

    const handleDecrement = () => {
        setCount((prevcount) => prevcount - 1);        
    }

    return (
        <>
            <button onClick={handleIncrement}>Increment</button>
            <br /> <br />
            <button onClick={handleDecrement}>Decrement</button>
            <br /> <br />
            <span> Count: {count} </span>
        </>
    )
    }