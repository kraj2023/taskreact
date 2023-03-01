import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Main = () => {

  return (  
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
            <Link to="/" className='mx-4'>Main</Link>
            <Link to="/loginpage" className='mx-4'>Login</Link>
            <Link to="/registrationpage" className='mx-4'>Registration</Link>
            <Link to="/first" className='mx-4'>First</Link>
            <Link to="/website" className='mx-4'>Project</Link>
            </Nav>
            
        </Container>
      </Navbar>
    </>
  )
}

export default Main



