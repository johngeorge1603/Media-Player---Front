import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div>
        <Navbar className="bg-black fixed-top" style={{height: '70px'}}>
        <Container className='p-0 ms-3'>
          <Navbar.Brand href="#home" className='fs-2  text-light'>
            <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
            <img
              alt=""
              src="https://www.pngall.com/wp-content/uploads/5/Media-Video-Player-PNG-Picture.png"
              height="36"
              className="d-inline-block align-top"
            />{' '}
            Media Player
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header