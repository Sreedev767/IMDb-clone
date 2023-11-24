import React from 'react'
import { Link } from 'react-router-dom';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header() {
  return (
    <>
       {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" pt-1" style={{backgroundColor:'#121212'}}>
          <Container  className='d-flex align-items-center justify-content-center'>
            <Navbar.Brand >
            <Link to={'/'}><img alt="IMDB" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" width="62px" height="30px" className='ms-3'/></Link>

            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} className="border-0 ms-auto" />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start" style={{backgroundColor:'#1F1F1F'}}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <Link to={'/'}><img alt="IMDB" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" width="62px" height="30px" className='ms-3'/></Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>

                {/* navlinks--------------------------------------- */}
                <Nav className="d-flex align-items-center justify-content-start flex-grow-1 pe-3">
                  
                  <Nav.Link href="#action1" className='d-flex align-items-center justify-content-center' style={{fontSize:'14px',color:'white',fontWeight:'700',textAlign:'center'}}>
                    <i class="fa-solid fa-bars fa-lg me-2"></i>
                    Menu
                  </Nav.Link>    
                  <Nav.Link href="#action2">
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
                  <Nav.Link href="#action3"  className='d-flex align-items-center justify-content-center pe-4' style={{color:'white',fontWeight:'800',fontSize:'14px',letterSpacing:'-1px',borderRight:'1px solid grey'}}>
                      IMDb
                    <span style={{color:'#06ACD4'}}>Pro</span>
                  </Nav.Link>
                  <Nav.Link href="#action4" className='d-flex align-items-center justify-content-center ms-3 me-3' style={{color:'white',fontWeight:'600',fontSize:'14px'}}>
                    <i class="fa-solid fa-bookmark me-2"></i> Watchlist
                  </Nav.Link>
                  <Nav.Link href="#action5" style={{color:'white',fontWeight:'600',fontSize:'14px'}}>Sign In</Nav.Link>
                  <Nav.Link href="#action5" style={{color:'white',fontWeight:'600',fontSize:'14px'}} className='me-2'>
                   <Dropdown.Toggle split variant="" id="dropdown-split-basic" style={{color:'white',fontWeight:'600',fontSize:'14px'}}>
                    EN
                   </Dropdown.Toggle>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header