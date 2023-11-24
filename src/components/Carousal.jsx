import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import './Carousal.css'

function Carousal() {

  const [popularMovies,setPopularMovies] = useState([])

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=66ede37ef5a08cdd50d7a867ddc61f31")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((data) => setPopularMovies(data.results))
    .catch((error) => console.error("Error fetching data:", error));
  },[])

  return (
    <>
      <div className="poster">
        <Carousel showThumbs={false} autoPlay={true}  transitionTime={1000} infiniteLoop={true} interval={5000} showStatus={false}
          >     
          {
            popularMovies.map(movie => (

                <>
                  <div className='posterbg'></div>
                  <div className="posterimage">
                    <img src={`https:image.tmdb.org/t/p/original${movie?movie.backdrop_path:""}`} alt="" />
                  </div>
                  <div className="posterimage_overly ms-5">
                    <div className="poster-title mb-3" style={{fontSize:'32px'}}>
                    <i class="buton fa-regular fa-circle-play fa-xl me-3"></i>
                      {movie ? movie.original_title: ""}</div>
                    <div className="poster-runtime">{movie ? movie.release_date : ""}
                      <span className='poster-rating ms-3'>{movie ? movie.vote_average: ""}</span>
                      <i class='buton fa fa-star ms-2'/>{" "}
                    </div>
                    <div className="poster_description">{movie ? movie.overview.slice(0,200):""}...</div>
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