import React from 'react';


const CharacterImage = ({ logo, style, size , height }) => {
    return <img src={logo} alt="Logo Star Wars" style={style} width={size} height={height} />;
};

export default CharacterImage;