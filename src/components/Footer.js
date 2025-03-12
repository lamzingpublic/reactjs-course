import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <Container className='mt-5 bg-info p-5'>
   
    <Row>
      <Col sm>
      Contact us:
      <br/>
      contact@myproject.com
      </Col>
      <Col sm>
      <b>My Project</b>
      <p className='sm'>2025 My project</p>
      </Col>
      <Col sm>Social media link</Col>
    </Row>
  </Container>
  )
}
