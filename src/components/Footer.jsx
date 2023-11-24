import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  
  return (
    <>
      <div className="container" style={{height:'100%'}}>
        <div className="row text-center pt-5 w-100" >
          <div className="col-lg-12 m-2 mt-5">
            <button className='btn ps-4 pe-4 rounded-2' style={{backgroundColor:'#F5C518',fontWeight:'600'}}>Sign in for more access</button>
          </div>
          <div className='container ps-5 pe-5'>
            <div className="row col-lg-12 d-flex align-items-center justify-content-center mt-4 g-0 ps-5 pe-5">
              <div className="col-lg-1 col-sm-2 col-6 ">
              <Link to={'/'}><i class="fa-brands fa-tiktok fa-xl mt-3 "></i> </Link>         
              </div>
              <div className="col-lg-1 col-sm-2 col-6">
              <Link to={'/'}><i class="fa-brands fa-instagram fa-xl  mt-3"></i> </Link>         
              </div>
              <div className="col-lg-1 col-sm-2 col-6">
              <Link to={'/'}><i class="fa-brands fa-twitter fa-xl mt-3"></i> </Link>         
              </div>
              <div className="col-lg-1 col-sm-2 col-6">
              <Link to={'/'}><i class="fa-brands fa-youtube fa-xl mt-3"></i> </Link>         
              </div>
              <div className="col-lg-1 col-sm-2 col-6">
              <Link to={'/'}><i class="fa-brands fa-facebook fa-xl mt-3"></i> </Link>         
              </div>
          </div>
           
          </div>
          <div className="col-lg-12">
            <div className='row d-flex align-items-top justify-content-center m-5 mb-0 ps-5 pe-5' style={{fontSize:'14px'}}>
              <div className="col-lg-1 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>Get the IMDb App <i class="fa-solid fa-arrow-up-right-from-square"></i></span></Link>
              </div>
              <div className="col-lg-1 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>Help <i class="fa-solid fa-arrow-up-right-from-square"></i></span></Link>
              </div>
              <div className="col-lg-1 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>Site Index <i class="fa-solid fa-arrow-up-right-from-square"></i></span></Link>

              </div>
              <div className="col-lg-1 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>IMDbPro <i class="fa-solid fa-arrow-up-right-from-square"></i></span></Link>

              </div>
              <div className="col-lg-1 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>Box Office Mojo <i class="fa-solid fa-arrow-up-right-from-square"></i></span></Link>

              </div>
              <div className="col-lg-2 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>IMDb Developer <i class="fa-solid fa-arrow-up-right-from-square"></i></span></Link>

              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className='row d-flex align-items-top justify-content-center ' style={{fontSize:'14px'}}>
              <div className="col-lg-1 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>Press Room </span></Link>
              </div>
              <div className="col-lg-1 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>Advertising <i class="fa-solid fa-arrow-up-right-from-square"></i></span></Link>
              </div>
              <div className="col-lg-1 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>Jobs <i class="fa-solid fa-arrow-up-right-from-square"></i></span></Link>
              </div>
              <div className="col-lg-1 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>Conditions of Use </span></Link>
              </div>
              <div className="col-lg-1 col-sm-2 col-6 pb-3">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>Privacy Policy</span></Link>
              </div>
              <div className="col-lg-1 col-sm-2">
              <Link to={'/'}  style={{textDecoration:'none'}}><span>Your Ads Privacy Choices</span></Link>            
              </div>
            </div>
          </div>
          <div className="col-lg-12">
          <p>IMDb, an Amazon company</p>
          </div>
          <div className="col-lg-12 pb-5">
          <p style={{fontSize:'10px',color:'grey'}}>© 1990-2023 by IMDb.com, Inc.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer