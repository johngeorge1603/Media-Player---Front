import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function LandingPage() {
  return (
    <>
      <Row className='align-items-center justify-content-between w-100' style={{marginTop:'100px'}}>

        <Col></Col>

        <Col lg={5}>
          <h1 style={{textAlign:'justify'}}>Welcome to <span className='text-warning'>Media Player</span></h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum repudiandae labore eaque nemo quibusdam unde iure dignissimos placeat sint omnis! Est aliquid alias perspiciatis autem nostrum quibusdam cumque laborum rerum.</p>
          
          <Link to={'/home'}>
          <button className='btn btn-primary mt-3 mb-5'>Get Started!</button>
          </Link>

        </Col>

        <Col lg={5} className='text-end pb-4'>
          <img src="https://cdn.dribbble.com/users/300756/screenshots/2063926/pi_soundwave.gif" height={'400px'} alt="" />
        </Col>

        <Col></Col>

      </Row>


      <div className="container mb-5 mt-5 d-flex justify-content-center align-items-center flex-column">
        <h2>Features</h2>

        <div className="card mb-5 mt-4 d-flex flex-row align-items-center justify-content-between w-100 border-0">

              <Card style={{ width: '18rem' }} className='p-2 bg-black text-light'>
            <Card.Img variant="top" src="https://t3.ftcdn.net/jpg/03/21/92/48/360_F_321924824_wvxcj5eCkKExlnh5ybStZbhdQcSTb20N.jpg" height={'170px'} />
            <Card.Body>
              <Card.Title>Manage Videos</Card.Title>
              <Card.Text style={{fontWeight:'lighter'}}>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className='p-2 bg-black text-light'>
              <Card.Img variant="top" src="https://recordingarts.com/wp-content/uploads/2021/07/Introductory-Sound-Design-QA.jpg" height={'170px'}  />
              <Card.Body>
                <Card.Title>Categorize Videos</Card.Title>
                <Card.Text style={{fontWeight:'lighter'}}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='p-2 bg-black text-light'>
              <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/previews/001/179/007/original/abstract-glowing-sound-waves-design-vector.jpg" height={'170px'}  />
              <Card.Body>
                <Card.Title>Save Playlists</Card.Title>
                <Card.Text style={{fontWeight:'lighter'}}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '18rem' }} className='p-2 bg-black text-light'>
              <Card.Img variant="top" src="https://i.pinimg.com/736x/b6/17/66/b61766f63e771b4b3c22de35223cfc33.jpg" height={'170px'}  />
              <Card.Body>
                <Card.Title>Manage History</Card.Title>
                <Card.Text style={{fontWeight:'lighter'}}>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>

        </div>
      </div>



      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-between w-100 ">
        
        <div className="col me-2">
          <h2 className='text-warning'>Simple, Powerful and Fast</h2>

          <p className='mb-3 mt-3'><span className='text-warning fs-4 fw-bold'>Play Everything </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi ex hic suscipit ipsam magni explicabo molestias nostrum, ipsa eos totam perspiciatis quasi odit adipisci dolorum, libero sequi itaque eligendi.
          </p>

          <p className='mb-3'><span className='text-warning fs-4 fw-bold'>Categorize Videos </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi ex hic suscipit ipsam magni explicabo molestias nostrum, ipsa eos totam perspiciatis quasi odit adipisci dolorum, libero sequi itaque eligendi.
          </p>

          <p className='mb-3'><span className='text-warning fs-4 fw-bold'>Manage History </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi ex hic suscipit ipsam magni explicabo molestias nostrum, ipsa eos totam perspiciatis quasi odit adipisci dolorum, libero sequi itaque eligendi.
          </p>

          


        </div>


        <div className="col ms-2">
        <iframe width="100%" height="310" src="https://www.youtube.com/embed/YykjpeuMNEk?si=JLihTszRhGPUSISQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage