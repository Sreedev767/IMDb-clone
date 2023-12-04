import React, { useState } from 'react';
import { Navbar, Nav, Offcanvas, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const MyNavbar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => {
    setShowOffcanvas((prev) => !prev);
  };

  return (
    <div>
      <Navbar style={{backgroundColor:'#121212'}} className='ps-2 pe-5'>

          <Nav className="d-none d-lg-flex align-items-center justify-content-center w-100">     
            <Navbar.Brand>
              <Link to="/">
                <img alt="IMDB" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" width="62px" height="30px" className="ms-5"/>
              </Link>
            </Navbar.Brand> 

            <Nav.Link href="" className='d-flex align-items-center justify-content-center' style={{fontSize:'14px',color:'white',fontWeight:'700',textAlign:'center'}}>
              <i class="fa-solid fa-bars fa-lg me-2"></i>
              Menu
            </Nav.Link>    
            <Nav.Link href="">
              <Dropdown as={ButtonGroup} style={{height:'30px'}}>
                <Dropdown.Toggle split variant="light" id="dropdown-split-basic" className='border-0 ps-2 ms-4'  style={{fontSize:'14px',borderTopLeftRadius:'4px',borderBottomLeftRadius:'4px',fontWeight:'bold'}}>
                  <span className='me-2 text-dark'>All</span>
                </Dropdown.Toggle>
                  <input type="text" placeholder='Search IMDb' style={{width:'39vw'}} className='border-0 form-control rounded-0'/>
                  <button className='btn btn-light border-0'  style={{borderTopRightRadius:'4px',borderBottomRightRadius:'4px'}} >
                    <i class="fa-solid fa-magnifying-glass" style={{color:'gray'}}></i>
                  </button>
      
                <Dropdown.Menu className='ms-4 p-2'style={{backgroundColor:'rgb(31,31,31)',fontSize:'17px',textAlign:'left',letterSpacing:'1px'}} >
                  <Dropdown.Item className='text-warning pt-3' href="#/action-1"><i class="fa-solid fa-magnifying-glass me-3 text-warning fa-lg" style={{fontSize:'17px'}}></i> All</Dropdown.Item>
                  <Dropdown.Item className='text-light pt-3' href="#/action-2"><i class="fa-solid fa-film me-3 fa-lg" style={{color:'grey'}}></i>Title</Dropdown.Item>
                  <Dropdown.Item className='text-light pt-3' href="#/action-3"><i class="fa-solid fa-tv me-3 fa-lg" style={{color:'grey',fontSize:'17px'}}></i>TV Episode</Dropdown.Item>
                  <Dropdown.Item className='text-light pt-3' href="#/action-4"><i class="fa-solid fa-user-group me-3 fa-xl" style={{color:'grey',fontSize:'17px'}}></i>Celbs</Dropdown.Item>
                  <Dropdown.Item className='text-light pt-3' href="#/action-5"><i class="fa-solid fa-building me-3 fa-lg" style={{color:'grey',fontSize:'27px'}}></i>Companies</Dropdown.Item>
                  <Dropdown.Item className='text-light pt-3' href="#/action-6"><i class="fa-solid fa-right-long me-3 fa-2xl" style={{color:'grey',fontSize:'22px'}}></i>Keywords</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item className='text-light pt-2' href="#/action-7"><i class="fa-solid fa-file-lines fa-lg me-3" style={{color:'grey'}}></i>Advanced Search</Dropdown.Item>

                </Dropdown.Menu>
              </Dropdown>


            </Nav.Link>
            <Nav.Link style={{color:'white',fontWeight:'800',fontSize:'14px',letterSpacing:'-1px'}}>
                IMDb
              <span style={{color:'#06ACD4'}}>Pro</span>
            </Nav.Link>
            <Nav.Link className='d-flex align-items-center justify-content-center mx-2' style={{color:'white',fontWeight:'600',fontSize:'14px'}}>
              <i class="fa-solid fa-bookmark me-2"></i> Watchlist
            </Nav.Link>
            <Nav.Link  style={{color:'white',fontWeight:'600',fontSize:'14px'}}>Sign In</Nav.Link>
            <Nav.Link href="#action5" style={{color:'white',fontWeight:'600',fontSize:'14px'}}>
               EN <i class="fa-solid fa-caret-down"></i>
            </Nav.Link>
          </Nav>

        <Button className="d-lg-none bg-transparent border-0" onClick={handleOffcanvasToggle}><i class="fa-solid fa-bars"></i></Button>
        <Navbar.Brand className="d-lg-none"><Link to="/"><img alt="IMDB" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" width="62px" height="30px" className="ms-2"/></Link></Navbar.Brand>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleOffcanvasToggle} style={{backgroundColor:'#1F1F1F'}}>
        <Offcanvas.Header closeButton style={{background: 'repeating-linear-gradient( 45deg,transparent,transparent 10px, #313131 10px, #313131 15px)',height:'100px',width:'100%'}} >
        <Offcanvas.Title>
        </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='ps-4'>
          <p><i class="fa-solid fa-film me-4 fa-lg" style={{color:'grey'}}></i>Movies</p>
          <p><i class="fa-solid fa-tv me-4 fa-md" style={{color:'grey'}}></i>TV Shows</p>
          <p><i class="fa-solid fa-reply-all fa-flip-horizontal me-4 fa-lg" style={{color:'grey'}}></i>Watch</p>
          <p><i class="fa-solid fa-star me-4 fa-lg" style={{color:'grey'}}></i>Awards & Events</p>
          <p><i class="fa-solid fa-user-group me-4 fa-md" style={{color:'grey'}}></i>Celebs</p>
          <p><i class="fa-solid fa-earth-asia me-4 fa-lg" style={{color:'grey'}}></i>Community</p>

          <div className='mt-5'>
          <span className='fw-bold' style={{letterSpacing:'-1.2px'}}>IMDbPro</span>
          <p style={{letterSpacing:'-0.5px',fontSize:'15px'}}>For Industry Professionals</p>
          </div>

          <div>
          <span className='fw-bolder' style={{letterSpacing:'2px',fontSize:'12px',color:'grey'}}>LANGUAGE</span>
          <p className='fw-bold' style={{letterSpacing:'0px',fontSize:'13px'}}>English (United States)</p>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default MyNavbar;
