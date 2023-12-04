import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
  
  return (
    <>
      <div className="container pt-5 mt-5" style={{height:'100%'}}>
        <div className="d-flex align-items-center justify-content-center flex-column text-center" >
          <button className='btn px-4 rounded-2' style={{backgroundColor:'#F5C518',fontWeight:'600'}}>Sign in for more access</button>
          
          <Row className="my-4">
            <Col><i class="fa-brands fa-tiktok fa-lg m-3 "></i></Col>
            <Col><i class="fa-brands fa-instagram fa-lg m-3"></i></Col>
            <Col><i class="fa-brands fa-twitter fa-lg m-3"></i></Col>
            <Col><i class="fa-brands fa-youtube fa-lg m-3"></i></Col>
            <Col><i class="fa-brands fa-facebook fa-lg m-3"></i></Col>
          </Row>

          <Row className='container mt-5' style={{width:'55%'}}>
            <Col md={2}><Link style={{textDecoration:'none',color:'white'}}>Site Index <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></Link></Col>
            <Col md={2}><Link style={{textDecoration:'none',color:'white'}}>IMDbPro <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></Link></Col>
            <Col md={2}><Link style={{textDecoration:'none',color:'white'}}>Help <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></Link></Col>
            <Col md={3}><Link style={{textDecoration:'none',color:'white'}}>Box Office Mojo <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></Link></Col>
            <Col md={3}><Link style={{textDecoration:'none',color:'white'}}>IMDb Developer <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></Link></Col>
          </Row>

          <Row className='container mb-5' style={{width:'69%'}}>
            <Col md={2}><Link style={{textDecoration:'none',color:'white'}}>Press Room </Link></Col>
            <Col md={2}><Link style={{textDecoration:'none',color:'white'}}>Advertising <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></Link></Col>
            <Col md={1}><Link style={{textDecoration:'none',color:'white'}}>Jobs <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i></Link></Col>
            <Col md={2}><Link style={{textDecoration:'none',color:'white'}}>Conditions of Use</Link></Col>
            <Col md={2}><Link style={{textDecoration:'none',color:'white'}}>Privacy Policy</Link></Col>
            <Col md={3}><Link style={{textDecoration:'none',color:'white'}}>Your ads Privacy Choices </Link></Col>
          </Row>
          
          <div className='pb-5'>
            <p>IMDb, an Amazon company</p>
            <span style={{fontSize:'10px',color:'grey'}}>© 1990-2023 by IMDb.com, Inc.</span> 
          </div>
         </div>
      </div>
    </>
  )
}

export default Footer