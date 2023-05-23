
import React from 'react';

export const MsgSecret = ({ show }) => {
    return (
        <div>
            {show && <p>This is the secret message!</p>}
        </div>
    );
}
