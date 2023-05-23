import React, {useState} from 'react';
import Card from './CardComponent';
import Button from './buttonComponent';
import image1 from '../_image1.png';
import image2 from '../image2.png'

const CardContainer = () => {
  const [imageIndex, setImageIndex] = useState(0);
  const images = [image1, image2];
  
  const handleClick = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className='cardContairner'>
      <Card title="change Image" image={images[imageIndex]} />
      <Button label="Next Image" onClick={handleClick} />
    </div>
  );
};

export default CardContainer;
