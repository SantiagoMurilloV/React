import React, { useState } from 'react';
import CounterDisplay from './CounterDisplay';
import {IncrementButton,  DecrementButton}  from './incrementButton';

export const Counter = () => {
    const style = {
        color: '#f6b400',
        marginBottom: '10px'
    }




    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <CounterDisplay count={count} style={style} />
            <IncrementButton onClick={increment} />
            <DecrementButton onClick={decrement} />
        </div>
    );
};
