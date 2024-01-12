import React, { useState } from 'react';
import ExploreSkill from '../Components/ExploreSkill';
import Skills from '../Components/Skills';


function Flip() {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  return (
    <>
      <section className={`transition-container ${isFlipped ? 'flipped' : ''}`}>
        <img className='exploreoverimg' src="./exvector.png" alt="explore" />
        {isFlipped ? (
          <div><Skills handleFlip={handleFlip} /></div>
        ) : (
          <div>
            <ExploreSkill handleFlip={handleFlip} />
          </div>
        )}
      </section>
    </>
  );
}

export default Flip;
