import React from 'react'

const Home = () => {
  return (
    <div className='p-4 pt-16'>
      <input type="text" placeholder='Search Movies...'
      className='p-2 w-3/4 md:w-1/2 border rounded border-gray-700 bg-gray-900 
      bg-opacity-60 *:backdrop:backdrop-blur-md text-white fixed top-16 left-1/2 transform -translate-x-1/2'/>
      <div className="movies_container"></div>
      <div className="pagination_container"></div>   
    </div>
  )
}

export default Home