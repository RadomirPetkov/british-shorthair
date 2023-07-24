import { Link } from 'react-router-dom'
import logo from '../pictures/logo-white.png'

export const Navbar = () => {
  const linkClassName = 'hover:bg-baseBackground py-2 px-3 rounded-full'

  return (
    <div className="bg-gradient-to-b from-slate-800 via-gray-600 to-gray-500 flex flex-wrap m-0 w-screen">
      <div>
        <Link to={'/'}>
          <img src={logo} alt="" className='h-16 top-10 left-10 rounded-full hidden sm:block sm:h-10 md:h-16 xl:h-24 xl:top-5' />
        </Link>
      </div>
      {/* mobile view */}
      <img src={logo} alt="" className='w-24 h-16 m-auto pt-5 sm:hidden' />
        <div className='py-2 w-full space-y-2 px-0 sm:hidden'>
          <div className='flex flex-wrap justify-center items-center pt-2 w-full'>
            <Link to={'/'} className={linkClassName} >Home</Link>
            <Link to={'/around-the-world'} className={linkClassName} >SilverGlows around the world</Link>
            <Link to={'/studs'} className={linkClassName} >Studs</Link>
            <Link to={'/queens'} className={linkClassName} >Queens</Link>
            <Link to={'/kittens'} className={linkClassName} >Available kittens</Link>
            <Link to={'/feedback'} className={linkClassName} >Feedback</Link>
            <Link to={'/contact'} className={linkClassName} >Contact us</Link>
          </div>
          <div>
            {/* <Link to={'/around-the-world'} className={linkClassName} >Silverglows around the world</Link> */}
          </div>
        </div>
      <div>

        {/* web view */}
        <div className='flex-wrap space-x-1 px-10 py-5 space-y-5 hidden sm:block sm:p-10 sm:space-x-5'>
          <Link to={'/'} className={linkClassName}>Home</Link>
          <Link to={'/around-the-world'} className={linkClassName}>SilverGlows around the world</Link>
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
