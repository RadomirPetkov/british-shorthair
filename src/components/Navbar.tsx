import { useState } from 'react'
import { Link } from 'react-router-dom'
import arrowDown from '../pictures/arrowDown.png'
import arrowUp from '../pictures/arrowup.jpeg'
import logo from '../pictures/logo-white.png'

export const Navbar = () => {
  const linkClassName = 'hover:bg-blue-300 p-3 rounded-full'
  const [navigation, setNavigation] = useState(false)

  return (
    <div className="bg-black flex-wrap">
      <div>
        <Link to={'/'}>
          <img src={logo} alt="" className='h-16 absolute top-10 left-10 rounded-full hidden sm:block sm:h-10 md:h-16 xl:h-24 xl:top-5' />
        </Link>
      </div>
      <button className='' onClick={() => setNavigation(!navigation)}>
        <img src={logo} alt="" className='w-24 h-16 m-auto pt-5 sm:hidden' />
        {!navigation &&
          <img src={arrowDown} alt="" className='bg-white text-white rounded-full h-10 m-auto my-3 sm:hidden' />
        }
        {navigation &&
          <img src={arrowUp} alt="" className='bg-white text-white rounded-full h-10 m-auto my-3 sm:hidden' />
        }
      </button>
      {navigation &&
        <div className='flex-wrap space-x-1 px-10 py-5 space-y-5 sm:hidden'>
          <div>
            <Link to={'/'} className={linkClassName} onClick={() => setNavigation(!navigation)}>Home</Link>
          </div>
          <div>
            <Link to={'/about'} className={linkClassName} onClick={() => setNavigation(!navigation)}>About us</Link>
          </div>
          <div>
            <Link to={'/studs'} className={linkClassName} onClick={() => setNavigation(!navigation)}>Studs</Link>
          </div>
          <div>
            <Link to={'/queens'} className={linkClassName} onClick={() => setNavigation(!navigation)}>Queens</Link>
          </div>
          <div >
            <Link to={'/kittens'} className={linkClassName} onClick={() => setNavigation(!navigation)}>Available kittens</Link>
          </div>
          <div>
            <Link to={'/around-the-world'} className={linkClassName} onClick={() => setNavigation(!navigation)}>Silverglows around the world</Link>
          </div>
          <div>
            <Link to={'/feedback'} className={linkClassName} onClick={() => setNavigation(!navigation)}>Feedback</Link>
          </div>
          <div>
            <Link to={'/contact'} className={linkClassName} onClick={() => setNavigation(!navigation)}>Contact us</Link>
          </div>
        </div>
      }
      <div>

        {/* web view */}
        <div className='flex-wrap space-x-1 px-10 py-5 space-y-5 hidden sm:block sm:p-10 sm:space-x-5'>
          <Link to={'/'} className={linkClassName}>Home</Link>
          <Link to={'/about'} className={linkClassName}>About us</Link>
          <Link to={'/studs'} className={linkClassName}>Studs</Link>
          <Link to={'/queens'} className={linkClassName}>Queens</Link>
          <Link to={'/kittens'} className={linkClassName}>Available kittens</Link>
          <Link to={'/around-the-world'} className={linkClassName}>Silverglows around the world</Link>
          <Link to={'/feedback'} className={linkClassName}>Feedback</Link>
          <Link to={'/contact'} className={linkClassName}>Contacts</Link>
        </div>
      </div>
    </div>
  )
}
