import React from 'react'

function Wishlist() {
  return (
    <>
    <div className='pt-5 pb-2'>
        <div className='ps-3 mt-5' >
          <span style={{fontSize:'32px',fontWeight:'bold',color:'#F5C518'}}>What to watch</span>
        </div>
        <div className='ps-3 mt-5' style={{borderLeft:'5px solid #F5C518'}}>
        <span style={{fontSize:'24px',fontWeight:'bold'}}>From your Watchlist <i class="fa-solid fa-chevron-right fa-md ms-2"></i></span>
        </div>
      </div>

      <div className='container rowd-flex align-items-center justify-content-center text-center mb-5 pb-5'>
        <div className="col-lg-12 pt-5 mt-5">
        <i class="fa-solid fa-tarp fa-rotate-90 fa-2xl" style={{color:'#1F1F1F'}} ></i>
        </div>
        <div className="col-lg-12 mt-5">
          <span style={{fontSize:'16px',fontWeight:'bolder'}}>Sign in to access your Watchlist</span>
          <p style={{fontSize:'16px'}}>Save shows and movies to keep track of what you want to watch.</p>

        </div>
        <div className="col-lg-12">
          <button className='btn btn-dark text-primary rounded-1 border-0' style={{fontWeight:'bold', fontSize:'14px'}}>Sign in to IMDb</button>
        </div>
      </div>

      <div className='container'>
        <h3 className='ms-4 mb-5' style={{fontSize:'24px',fontWeight:'bold'}}>Recently viewed</h3>
        <div>
        <p className='ms-4 mb-5' style={{fontSize:'16px'}}>You have no recently viewed pages</p>
        </div>
      </div>
    
    </>
  )
}

export default Wishlist