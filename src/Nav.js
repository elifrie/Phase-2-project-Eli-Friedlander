import React from 'react'
import MovieCard from './MovieCard'

function Nav({movies}) {

return (
    <main className='movies'>
        {movies.map(movie => {
            return <MovieCard key = {movie.id} movie = {movie} />
        })}
    </main>

)}

export default Nav