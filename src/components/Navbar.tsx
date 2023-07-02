import { Link } from 'react-router-dom'
import logo from '../pictures/logo-white.png'

export const Navbar = () => {
  const linkClassName = 'hover:bg-blue-300 p-3 rounded-full'
  const navigation = true

  return (
    <div className="bg-black flex-wrap">
      <div>
        <Link to={'/'}>
          <img src={logo} alt="" className='h-16 absolute top-10 left-10 rounded-full hidden sm:block sm:h-10 md:h-16 xl:h-24 xl:top-5' />
        </Link>
      </div>
      <img src={logo} alt="" className='w-24 h-16 m-auto pt-5 sm:hidden' />
      {navigation &&
        <div className='flex-wrap py-5 w-full space-y-2 px-0 sm:hidden'>
          <div>
            <Link to={'/'} className={linkClassName} >Home</Link>
            <Link to={'/about'} className={linkClassName} >About us</Link>
            <Link to={'/studs'} className={linkClassName} >Studs</Link>
            <Link to={'/queens'} className={linkClassName} >Queens</Link>
          </div>
          <div>
            <Link to={'/kittens'} className={linkClassName} >Available kittens</Link>
            <Link to={'/feedback'} className={linkClassName} >Feedback</Link>
            <Link to={'/contact'} className={linkClassName} >Contact us</Link>
          </div>
          <div>
            {/* <Link to={'/around-the-world'} className={linkClassName} >Silverglows around the world</Link> */}
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
