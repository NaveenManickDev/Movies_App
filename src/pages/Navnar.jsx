import { Link } from 'react-router-dom'

const Navnar = () => {
  return (
   <nav className='bg-gray-900 p-4 text-white flex justify-between fixed w-full'>
        <Link to="/" className='text-xl font-bold'>Movie App</Link>
        <Link to="/watchList" className='text-xl'>Watchlist(0)</Link>
   </nav>
  )
}

export default Navnar