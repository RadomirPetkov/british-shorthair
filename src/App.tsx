import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Gallery } from './components/Gallery'
import { GalleryAdmin } from './components/GalleryAdmin'
import { About } from './components/About'
import { Kittens } from './components/Kittens'
import { Messanger } from './components/Messanger'
import { Studs } from './components/Studs'
import { Queens } from './components/Queens'
import { Feedback } from './components/Feedback/Feedback'
import { LeaveAComment } from './components/Feedback/LeaveAComment'
import { AboutTheBreed } from './components/AboutTheBreed'
import { Appearance } from './components/Appearance'
import { Personality } from './components/Personality'
import { ScrollToTop } from './components/ScrollToTop'

function App () {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/about-the-breed' element={<AboutTheBreed />} />
        <Route path='/appearance' element={<Appearance />} />
        <Route path='/personality' element={<Personality />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/kittens' element={<Kittens />} />
        <Route path='/studs' element={<Studs />} />
        <Route path='/queens' element={<Queens />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/feedback/comment' element={<LeaveAComment />} />
        <Route path='/gallery/admin' element={<GalleryAdmin />} />
      </Routes>
      <Messanger />
    </>
  )
}

export default App
