import React from 'react'

function NewMovie({handleSubmit, handleChange}) {



    return(
    <div className="new-movie-form">
        <h2>New Movie Suggestion?</h2>
        <form onSubmit = {handleSubmit}>
          <input  className='inputForm' onChange = {handleChange} type="text" name="title" placeholder="Movie Name" />
          <input  className='inputForm' onChange = {handleChange} type="text" name="image" placeholder="Cover URL" />
          <input  className='inputForm' onChange = {handleChange} type="number" name="release_year" placeholder="Release Year" />
          <input  className='inputForm' onChange = {handleChange} type="text" name="description" placeholder="Short Description" />
          <button type="submit">Add Movie</button>
        </form>
      </div>
    )
}


export default NewMovie