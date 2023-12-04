import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousal.css'
import instance from '../instance';

function Carousal({fetchUrl}) {

  const [carMovies,setCarMovies] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";


  const fetchCarousalData = async ()=>{
    const {data} = await instance.get(fetchUrl)
    setCarMovies(data.results)
  }

  useEffect(()=>{
    fetchCarousalData()
  },[])

  return (
    <>
      <div className="poster">
        <Carousel showThumbs={false} autoPlay={true}  transitionTime={1000} infiniteLoop={true} interval={6000} showStatus={false}
          >     
          {
            carMovies?.map(movie => (

                <>
                  <div className='posterbg'></div>
                  <div className="posterimage">
                    <img src={`${base_url}${movie?movie.backdrop_path:""}`} alt="no image" />
                  </div>
                  <div className="posterimage_overly ms-5 pb-5">
                    <div className="d-flex flex-row  poster-title mb-3 w-100" style={{fontSize:'32px'}}>
                      <div><i class="buton fa-regular fa-circle-play fa-xl me-3"></i></div>
                      <div>{movie?.original_title.slice(0,35)}</div>
                      </div>
                    <div className="poster-runtime">{movie ? movie.release_date : ""}
                      <span className='poster-rating ms-3'>{movie ? movie.vote_average: ""}</span>
                      <i class='buton fa fa-star ms-2'/>{" "}
                    </div>
                    <div className="poster_description pb-5">{movie ? movie.overview.slice(0,200):""}...</div>
                  </div>
                
                </>

            ))
          }
        </Carousel>
      </div>
    </>
  )
}

export default Carousal