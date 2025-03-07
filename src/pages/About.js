import React from 'react'
import Row from 'react-bootstrap/Row';
import Button from '../components/Button'
import Container from 'react-bootstrap/Container';
export default function About() {
  return (
    <Container >
      <Row className='mt-5'>
      <h1>About us page</h1>
      <Button buttonText={"CLick me"} message={"This is About us page"} />
      </Row>
    </Container>
  )
}
