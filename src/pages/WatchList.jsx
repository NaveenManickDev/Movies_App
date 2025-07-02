import React, { useContext, useState } from 'react'
import GenreFilter from '../components/GenreFilter'
import { WatchListContext } from '../context/WatchListContext'
import Moviecard from '../components/Moviecard'

const WatchList = () => {
  const {watchlist} = useContext(WatchListContext)
  const [search, setSearch] = useState("")

  const filteredMovies = watchlist.filter((movie) => 
    movie.title.toLowerCase().includes(search.toLowerCase())
  ) 

  return (
    <div className='p-4 pt-16'>
      <input type="text" placeholder='Search Movies...'
      className='p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 
      bg-opacity-60 *:backdrop:backdrop-blur-md text-white fixed top-16 left-1/2 
      transform -translate-x-1/2 z-10' onChange={(e) => setSearch(e.target.value)}/>
      
        <div className='mt-16 flex justify-center'>
          <GenreFilter />
        </div>

        <div className="movies_container grid grid-cols-1 md:grid-cols-3 
      lg:grid-cols-4 gap-4 mt-16">
        {filteredMovies.map(movie => {
          return (
            <Moviecard key={movie.id} movie={movie} />
          )
        })}
      </div>
      
      </div>
  )
}

export default WatchList