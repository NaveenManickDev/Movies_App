import React, { useState, useEffect } from 'react'
import Moviecard from '../components/Moviecard'


const Home = () => {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=5c8e33ae58b4b69af48f3444fd46fc74")
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
  }, [])
  

  return (
    <div className='p-4 pt-16'>
      <input type="text" placeholder='Search Movies...'
      className='p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 
      bg-opacity-60 *:backdrop:backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2 z-10'/>
      <div className="movies_container grid grid-cols-1 md:grid-cols-3 
      lg:grid-cols-4 gap-4 mt-16">
        {movies.map(movie => {
          return (
            <Moviecard key={movie.id} movie={movie} />
          )
        })}
      </div>
      <div className="pagination_container flex justify-between mt-5">
        <button className='p-2 bg-gray-700 text-white rounded'>PREV</button>  
        <button className='p-2 bg-gray-700 text-white rounded'>NEXT</button>  
      </div>   
    </div>
  )
}

export default Home