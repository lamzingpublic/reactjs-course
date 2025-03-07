import React, { useState, useEffect } from 'react'
import "./Home.css"
import BCard from '../components/BCard'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

export default function Blogs() {


  const [dataBlog, setData] = useState([]);

  const blogData = [{
    id: 1,
    title: "Biology Course",
    image: "",
    body: "This is body text 1111"
  },
  {
    id: 12,
    title: "Chemistry Course",
    image: "",
    body: "This is body text 2222"
  },
  {
    id: 3,
    title: "Math Course",
    image: "",
    body: "This is body text 333"
  }
  ]
  useEffect(() => {
    blogApiCall()
  }, []);

  const blogApiCall = () => {
    axios
      .get(
        `https://67c9b82d102d684575c346b0.mockapi.io/blogs/blogs`
      )
      .then((response) => {

        let blogs = response.data;
        setData(blogs)

      }).catch((e) => {
        console.log("eror " + e)
      });
  }



  return (
    <div className='mainDivHome'>

      <h1>Blog page</h1>
      <h5>This is blog page</h5>
      <hr />
      <br />
      <br />
      <Container>

        <Row>
          {dataBlog.map((item, index) => {
            return <Col key={index} className='mt-5'><BCard title={item.title} body={item.body} /></Col>
          })}

        </Row>
      </Container>

    </div>
  )
}
