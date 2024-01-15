import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'





function Skills({handleFlip}) {
 

    const handleClick = () => {
     
        handleFlip();
      };

  return (

    <Container>
          <div className='pc'>
              <img src="./Image.png" alt="" />
             
             <div className='sliss-content'>
                <btton className='custom' onClick={handleClick}> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0527 18.8859C14.6784 19.2602 14.0717 19.2602 13.6974 18.8859L6.98907 12.1776C6.61485 11.8034 6.61485 11.1966 6.98907 10.8223L13.6974 4.114C14.0717 3.73977 14.6784 3.73977 15.0527 4.114C15.4269 4.48822 15.4269 5.09504 15.0527 5.46927L9.02199 11.5L15.0527 17.5306C15.4269 17.9049 15.4269 18.5117 15.0527 18.8859Z" fill="#A177B4"/>
</svg> back</btton>

                <Container>
                <Row>
                    <Col lg={6}>
                        <div className="box">
                            <img src="./html-5-svgrepo-com 1.png" alt="" />
                            <div><h3>HTML</h3>
                            <span>Proficient in developing SPAs using React, Redux, and Ant Design.</span></div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="box">
                            <img src="./js-svgrepo-com 1.png" alt="" />
                            <div><h3>VANILLA JS</h3>
                            <span>Proficient in developing SPAs using React, Redux, and Ant Design.</span></div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="box">
                            <img src="./css-3-svgrepo-com 1.png" alt="" />
                            <div><h3>CSS</h3>
                            <span>Proficient in developing SPAs using React, Redux, and Ant Design.</span></div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="box">
                            <img src="./react-javascript-js-framework-facebook-svgrepo-com 1.png" alt="" />
                            <div><h3>REACT JS</h3>
                            <span>Proficient in developing SPAs using React, Redux, and Ant Design.</span></div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="box">
                            <img src="./figma-svgrepo-com 1.png" alt="" />
                            <div><h3>FIGMA</h3>
                            <span>limited working  Proficiency in developing ui using Figma  Ant Design.</span></div>
                        </div>
                    </Col>
                    
                </Row>
                </Container>

             </div>
            
          </div>
    </Container>

  )
}

export default Skills