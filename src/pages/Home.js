import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import BCard from '../components/BCard'
import "./Home.css"
import CustomNavbar from '../components/Navbar'
export default function Home() {
  return (
    <div className='mainDivHome'> 

    <h1>Home page</h1>
      <br />
      <br />
      <Link to="/blogs">Go to Blog page</Link>
      <br />
      <br />
      <BCard/>

      <br />
      <br/>
      <Button  variant="success" onClick={()=>alert("hello")}>Click me | Success </Button>
    </div>
  )
}
