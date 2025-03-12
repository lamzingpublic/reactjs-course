import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import BCard from '../components/BCard'
import Container from 'react-bootstrap/Container';
import "./Home.css"
import CustomNavbar from '../components/Navbar'
import Footer from '../components/Footer'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeSlider from '../components/HomeSlider';
import HomeCard from '../components/HomeCard';
import FormTable from '../components/FormTable';
import UserFormModal from '../components/UserFormModal';

import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
export default function Home() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Container >
       <UserFormModal show={show} setShow={setShow} handleClose={handleClose} handleShow={handleShow} /> 

     
      <Row className="mt-5" >
        <Col>
          <HomeCard />
        </Col>
        <Col><HomeSlider /> </Col>
      </Row>
      <Row className="mt-5" >
        <h1>Category</h1>
        <Col>
          <BCard />
        </Col>
        <Col>
          <BCard />
        </Col>
        <Col>
          <BCard />
        </Col>
      </Row>
      <Row className='mt-5'>
        <h1>CRUD Form Handling Example</h1>
        <Button variant="primary" onClick={() => { handleShow() }}>Add User</Button>
        <FormTable />
      </Row>
      <Footer />
    </Container>
  )
}
