import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner() {
  return (
    <header>
    <Container>
      <Row>
        <Col>
          <div className='left'>

            <span className='top-h'>Dipesh Singh Khangarot</span>
            <div className='heading'>
              Full-stack
              <br/>
              <span >Developer</span>
            </div>

        <a href="#">My Work</a>

          </div>

        </Col>
        <Col><div className='right'>
            <img src="./Image [object-cover].png" alt="dipesh" />
          </div></Col>


      </Row>
    </Container>

    <img className='overimg' src="./Vector.png" alt="" />
    </header>
  )
}

export default Banner
