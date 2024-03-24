import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
 

function Footer() {
  return (
    <div>
          <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      <section className='d-flex  text-light justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className='d-flex flex-row'>

          <Link to={'https://www.facebook.com'} style={{textDecoration:'none', color:'white'}}>
          <p className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </p>
          </Link>

          <Link to={'https://twitter.com'} style={{textDecoration:'none', color:'white'}}>
          <p  className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </p>
          </Link>
          <Link to={'https://www.google.com'} style={{textDecoration:'none', color:'white'}}>
          <p  className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </p>
          </Link>
          <Link to={'https://www.instagram.com'} style={{textDecoration:'none', color:'white'}}>
          <p  className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </p>
          </Link>
          <Link to={'https://www.linkedin.com'} style={{textDecoration:'none', color:'white'}}>
          <p  className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </p>
          </Link>
          
        </div>
      </section>

      <section className=' text-light'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>
                <MDBIcon icon="gem" className="me-3" />
                Media Player
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat soluta totam facilis distinctio voluptatem odio at dicta hic ducimus, expedita nobis rem eum quisquam iusto numquam molestias perspiciatis eos consequuntur!
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>LINKS</h6>

              <Link to={'/'} style={{textDecoration:'none', color:'white'}}>
              <p>
                  Landing Page
              </p>
              </Link>
              <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>
              <p>
                  Home
              </p>
              </Link>
              <Link to={'/watchhistory'} style={{textDecoration:'none', color:'white'}}>
              <p>
                  Watch History
              </p>
              </Link>
              
                
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4 text-light'>GUIDES</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4  text-light'>Contact Us</h6>
              <MDBInput label='' id='form1' type='text'/>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center  text-light p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer