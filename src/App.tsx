import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Gallery } from './components/Gallery'
import { GalleryAdmin } from './components/GalleryAdmin'
import { About } from './components/About'
import { Kittens } from './components/Kittens'

function App () {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/kittens' element={<Kittens />} />
        <Route path='/gallery/admin' element={<GalleryAdmin />} />
      </Routes>
    </>
  )
}

export default App
