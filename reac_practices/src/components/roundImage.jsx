import React, { useState } from 'react';
import { Image } from './image';
import imge1 from '../image1.jpg'


export const  Round =() =>{
    const [round, setRound] = useState(false);

    const toggleRound = () => {
        setRound(!round);
    };

    return (
        <div>
            <Image
                src={imge1}
                alt="Image 1"
                descripcion="image 1"
                round={round}
            />
            <button onClick={toggleRound}>
                {round ? 'Switch to square image' : 'Switch to round image'}
            </button>
        </div>
    );
}