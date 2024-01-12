import React from 'react';
import { Container } from 'react-bootstrap';

function ExploreSkill({ handleFlip }) {
  const handleClick = () => {
    handleFlip();
  };

  return (
   
      <Container >
        <div className='pc'>
          <img src="./image.svg" alt="" />
          <div className='skill text-center'>
            Expolre my skills
            <br />
            <button className='custom' onClick={handleClick}>
              Click here 👋
            </button>
          </div>
        </div>
      </Container>
   
  );
}

export default ExploreSkill;
