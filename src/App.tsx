import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Gallery } from './components/Gallery/Gallery'
import { GalleryAdmin } from './components/Gallery/GalleryAdmin'
import { AroundTheWorld } from './components/AroundTheWorld'
import { AvailableKittens } from './components/AvailableKittiens/AvailableKittens'
import { Studs } from './components/Studs'
import { Queens } from './components/Queens'
import { Feedback } from './components/Feedback/Feedback'
import { LeaveAComment } from './components/Feedback/LeaveAComment'
import { AboutTheBreedMain } from './components/AboutTheBreed/AboutTheBreedMain'
import { Appearance } from './components/AboutTheBreed/Appearance'
import { Personality } from './components/AboutTheBreed/Personality'
import { ScrollToTop } from './components/features/ScrollToTop'
import { Contact } from './components/Contact'
import { Kittens } from './components/AvailableKittiens/Kittens'
import { FAQ } from './components/FAQ/FAQ'

function App () {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/around-the-world' element={<AroundTheWorld />} />
        <Route path='/about-the-breed' element={<AboutTheBreedMain />} />
        <Route path='/appearance' element={<Appearance />} />
        <Route path='/personality' element={<Personality />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/kittens' element={<AvailableKittens />} />
        <Route path='/studs' element={<Studs />} />
        <Route path='/queens' element={<Queens />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/feedback/comment' element={<LeaveAComment />} />
        <Route path='/gallery/admin' element={<GalleryAdmin />} />
        <Route path='/kittens/:dob' element={<Kittens />} />
      </Routes>
    </>
  )
}

export default App
