import React, { useState } from 'react';
import './Counter.scss'


const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Прибавить 1</button>
        </>
  );
};

export default Counter