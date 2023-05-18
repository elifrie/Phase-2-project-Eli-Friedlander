import React, { useState } from 'react';

function MovieCard({movie}) {

  const [display, setDisplay] = useState(true)

  function handleClick() {
    setDisplay((display) => !display)
  }
    return(       
     <div className='container'>
        <div onClick = {handleClick} >
          <div className={display ? "image-div" : "desc-div" }>{display ? 
           <img className='img' src={movie.image}/> :
           <p className='description'>{movie.Description}</p>
           }</div> 
          <h4 className='movieTitleText'>{movie.title} ({movie.release_year})</h4>
          <h5 className='movieRatingText'>{movie.Rating=== undefined || null ? "UNRELEASED" : "IMDb Rating: " + movie.Rating}</h5>
        </div>
     </div>
    )
}


export default MovieCard

