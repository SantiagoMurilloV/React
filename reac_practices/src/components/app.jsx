
import React, { useState } from 'react';

import '../index.css';
import { Checkbox } from './box1';
import { User } from './usercards';
import { UserData } from '../js/users';
import { Calculator } from './calculator';
import { Round } from './roundImage';
import { ChangeTheme } from './chageTheme';
import { SecretMsg } from './SecretMsg';
import { Counter } from './counter';
import CardContainer from './CardContainer'

const randomIndex = () => Math.floor(Math.random() * UserData.length);

export const App = () => {

    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div >
            <button className='buttonC' onClick={toggleVisibility}>
                {isVisible ? 'Hide Elements' : 'Show more Elements'}
            </button>
            {isVisible && (
                
                <div className="pContainer">
                    <div className="container">
                        <Checkbox label={true} color="red" />
                    </div>
                    <div className="container">
                        <User name={UserData[randomIndex()].name} age={UserData[randomIndex()].age} email={UserData[randomIndex()].email} />
                    </div>
                    <div className="container">
                        <Calculator />
                    </div>
                    <div className="container">
                        <Round />
                    </div>
                    <div className="container">
                        <SecretMsg />
                    </div>
                    <div className="container">
                        <ChangeTheme />
                    </div>
                    <div className="container">
                        <Counter />
                    </div>
                    <div className="container">
                        <CardContainer />
                    </div>
                    

                </div>
            )}
        </div>
    );
};


export default App