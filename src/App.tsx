import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/features/ScrollToTop'
import { Footer } from './components/Footer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase-config'
import { useDispatch } from 'react-redux'
import { changeUser } from './redux/user'
import { HelmetProvider } from 'react-helmet-async'
import { LocalBusinessJsonLd } from './components/features/JsonLd'

const Home = lazy(() => import('./components/Home').then(m => ({ default: m.Home })))
const Gallery = lazy(() => import('./components/Gallery/Gallery').then(m => ({ default: m.Gallery })))
const GalleryAdmin = lazy(() => import('./components/Gallery/GalleryAdmin').then(m => ({ default: m.GalleryAdmin })))
const AroundTheWorld = lazy(() => import('./components/AroundTheWorld').then(m => ({ default: m.AroundTheWorld })))
const AvailableKittens = lazy(() => import('./components/AvailableKittiens/AvailableKittens').then(m => ({ default: m.AvailableKittens })))
const Studs = lazy(() => import('./components/Studs').then(m => ({ default: m.Studs })))
const Queens = lazy(() => import('./components/Queens').then(m => ({ default: m.Queens })))
const Feedback = lazy(() => import('./components/Feedback/Feedback').then(m => ({ default: m.Feedback })))
const LeaveAComment = lazy(() => import('./components/Feedback/LeaveAComment').then(m => ({ default: m.LeaveAComment })))
const AboutTheBreedMain = lazy(() => import('./components/AboutTheBreed/AboutTheBreedMain').then(m => ({ default: m.AboutTheBreedMain })))
const Appearance = lazy(() => import('./components/AboutTheBreed/Appearance').then(m => ({ default: m.Appearance })))
const Personality = lazy(() => import('./components/AboutTheBreed/Personality').then(m => ({ default: m.Personality })))
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })))
const Kittens = lazy(() => import('./components/AvailableKittiens/Kittens').then(m => ({ default: m.Kittens })))
const FAQ = lazy(() => import('./components/FAQ/FAQ').then(m => ({ default: m.FAQ })))
const Login = lazy(() => import('./components/Login/Login').then(m => ({ default: m.Login })))

function App () {
  const disptach = useDispatch()
  onAuthStateChanged(auth, (currentUser: any) => {
    disptach(changeUser(currentUser ? { uid: currentUser.uid, email: currentUser.email } : undefined))
  })
  return (
    <HelmetProvider>
      <LocalBusinessJsonLd />
      <div className='flex flex-col min-h-screen'>
        <ScrollToTop />
        <Navbar />
        <main className='flex-1 flex flex-col'>
          <Suspense fallback={<div className="flex items-center justify-center h-64"><span className="loading loading-spinner loading-lg"></span></div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/around-the-world' element={<AroundTheWorld />} />
            <Route path='/about-the-breed' element={<AboutTheBreedMain />} />
            <Route path='/appearance' element={<Appearance standalone />} />
            <Route path='/personality' element={<Personality standalone />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/kittens' element={<AvailableKittens />} />
            <Route path='/studs' element={<Studs />} />
            <Route path='/queens' element={<Queens />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/FAQ' element={<FAQ />} />
            <Route path='/login' element={<Login />} />
            <Route path='/feedback/comment' element={<LeaveAComment />} />
            <Route path='/gallery/admin' element={<GalleryAdmin />} />
            <Route path='/kittens/:id' element={<Kittens />} />
          </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  )
}

export default App
