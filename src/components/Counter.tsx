import React, { useState } from 'react';
import classes from './Counter.module.scss';


const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <>
            <div>{counter}</div>
            <button className={classes.button} onClick={() => setCounter(counter + 1)}>Прибавить 1</button>
        </>
  );
}

export default Counter