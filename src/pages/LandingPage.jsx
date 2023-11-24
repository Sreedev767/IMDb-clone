import React from 'react'
import Carousal from '../components/Carousal'
import Row from '../components/Row'
import Wishlist from '../components/Wishlist'
import requests from '../request'




function LandingPage() {
  return (
    <>
      <div className="container">
        <Carousal/>
        <div className='m-3 mt-5 pt-5'><p className='ps-4' style={{fontSize:'48px',color:'#F5C518',fontWeight:'bold',borderLeft:'8px solid #F5C518'}}>What to Watch - <span style={{color:'white'}}>IMDb</span></p></div>
        <Row isPoster={true} title="Top Picks" titlea="Exclusive videos" titleb="Celebrity interviews, trending entertainment stories, and expert analysis"  fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="IMDb Originals" titlea="Top 10 on IMDb this week" titleb="IMDb helps you select the perfect next show or movie to watch."  fetchUrl={requests.fetchTopRated}/>
        <Row title="Editor's picks" titlea="More to explore" titleb="This week's top TV and movies"  fetchUrl={requests.fetchComedyMovies}/>
        <Row isPoster={true} title="Top Picks" titlea="Explore what’s streaming" titleb="included with Prime"  fetchUrl={requests.fetchActionMovies}/>
        <Row isPoster={true} title="Trending" fetchUrl={requests.fetchDocumentaries}/>

        <Wishlist/>
        <Row title="Fan Favorites" titlea="Explore Movies & TV shows" titleb="This week's top TV and movies"  fetchUrl={requests.fetchRomanceMovies}/>
      </div>
    </>
  )
}

export default LandingPage


