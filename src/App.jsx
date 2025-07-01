import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'
import Navnar from './pages/Navnar'
import Home from './pages/Home'
import WatchList from './pages/WatchList'

function App() {
  return (
   <BrowserRouter>
   <Navnar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/watchlist' element={<WatchList/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default App
