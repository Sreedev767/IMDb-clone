import React, { useEffect, useState } from 'react'
import instance from '../instance';
import './Row.css'

function Row({title,titlea,titleb,fetchUrl,isPoster}) {
  console.log(fetchUrl);

  const [allMovie,setAllMovie] = useState()
  const base_url = "https://image.tmdb.org/t/p/original/";

  const fetchData = async ()=>{
    const {data} = await instance.get(fetchUrl)
    setAllMovie(data.results);
  }

  console.log(allMovie);

  useEffect(()=>{
    fetchData()
  }, [])


  return (
    <div className='row'>
      <div className='pt-5 pb-1'>
        <div className='ps-3 mt-4' >
          <span style={{fontSize:'32px',fontWeight:'bold',color:'#F5C518'}}>{titlea}</span>
        </div>
        <div className='ps-3 mt-5' style={{borderLeft:'5px solid #F5C518'}}>
        <span style={{fontSize:'24px',fontWeight:'bold'}}>{title}<i class="fa-solid fa-chevron-right fa-md ms-2"></i></span>
        </div>
        <div className='ps-3 mt-3 mb-2'>
         <span style={{fontSize:'16px',color:'#AFAFAF'}}>{titleb}</span>
        </div>
      </div>
      <div className='movie-row'>
        {
          allMovie?.map(item=>(
            <>
              <img className={`movie ${isPoster && 'movie-poster'} `}src={`${base_url}${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
              {isPoster? "":
                <div className="posterimage_overly mt-2 ms-3 me-5 ">
                <div className="poster-title mb-3">
                  <div className='mb-1'><i class="buton fa-regular fa-circle-play fa-xl"></i></div>
                  <div>{item?.original_title}</div>
                </div>
                <div className="poster-runtime">
                  <span style={{color:'grey'}}>{item?.release_date}</span>
                  <span className='poster-rating ms-3'>{item?.vote_average}</span>
                  <i class='buton fa fa-star ms-2'/>
                </div>
                <div className="poster_description">{item?.overview.slice(0,100)}...</div>
              </div>
              }
            </>
            
          ))
        }
      </div>
    </div>
  )
}

export default Row