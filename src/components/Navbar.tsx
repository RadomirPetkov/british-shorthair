import { useState } from 'react'
import { Link } from 'react-router-dom'
import arrowDown from '../pictures/arrowDown.png'
import arrowUp from '../pictures/arrowup.jpeg'
import image from '../pictures/image.jpeg'

export const Navbar = () => {
  const linkClassName = 'hover:bg-blue-300 p-3 rounded-full'
  const [navigation, setNavigation] = useState(false)

  return (
    <div className="bg-black flex-wrap">
      <div>
        <Link to={'/'}>
        <img src={image} alt="" className='h-16 absolute top-10 left-10 rounded-full hidden sm:block sm:absolute md:h-24 xl:h-32 xl:top-5'/>
        </Link>
      </div>
      <h2 className="pt-5 text-2xl font-bold">SilverGlow British Shorthair</h2>
      <button className='' onClick={() => setNavigation(!navigation)}>
        {!navigation &&
          <img src={arrowDown} alt="" className='bg-white text-white rounded-full h-10 mt-3 transition ease-in delay-100 sm:hidden' />
        }
        {navigation &&
          <img src={arrowUp} alt="" className='bg-white text-white rounded-full h-10 mt-3 transition ease-in delay-100 sm:hidden' />
        }
      </button>
      {navigation &&
        <div className='flex-wrap space-x-1 px-10 py-5 space-y-5 sm:hidden'>
          <div>
            <Link to={'/'} className={linkClassName}>Home</Link>
          </div>
          <div>
            <Link to={'/gallery'} className={linkClassName}>Gallery</Link>
          </div>
          <div>
            <Link to={'/kittens'} className={linkClassName}>Available kittens</Link>
          </div>
          <div>
            <Link to={'/about'} className={linkClassName}>About us</Link>
          </div>
          <div>
            <Link to={'/contact'} className={linkClassName}>Contacts</Link>
          </div>
        </div>
      }
      <div>
      <div className='flex-wrap space-x-1 px-10 py-5 space-y-5 hidden sm:block sm:p-10 sm:space-x-5'>
            <Link to={'/'} className={linkClassName}>Home</Link>
            <Link to={'/gallery'} className={linkClassName}>Gallery</Link>
            <Link to={'/kittens'} className={linkClassName}>Available kittens</Link>
            <Link to={'/about'} className={linkClassName}>About us</Link>
            <Link to={'/contact'} className={linkClassName}>Contacts</Link>
        </div>
      </div>
    </div>
  )
}
