import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [counter,setCounter] = useState(0)
    return <div>
        <h1>{counter}</h1>
        <button className={classes.f} onClick={()=> setCounter(p=>p+1)}>inc</button>
    </div>
}
