import React, { useState } from 'react';
import { MsgSecret } from './mage';

export const SecretMsg = () => {
    const [show, setShowMsg] = useState(false);

    const toggleMessage = () => {
        setShowMsg(!show);
    };

    return (
        <div>
            <MsgSecret show={show} />
            <button onClick={toggleMessage}>
                {show ? 'hide message' : 'show message'}
            </button>
        </div>
    );
}