import React from 'react';
import { randomNumber } from '../js/random';

export const Checkbox = ({ label , color }) => {
    const isChecked = randomNumber() === 0;

    return (
        <div>
            <label>
                <input type="checkbox" checked={isChecked} />
                {isChecked && label? 'Checked' : 'Unchecked'}
                {label}
            </label>
        </div>
    );
};
