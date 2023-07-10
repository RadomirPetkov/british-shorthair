import { Link } from 'react-router-dom'

export const Footer = () => {
  const linkClassName = 'hover:bg-baseBackground p-3 rounded-full'

  return (
    <div className="bg-black flex-wrap m-0 ">
        <div className='flex-wrap py-2 w-full space-y-2 px-0 sm:hidden'>
          <div>
            <Link to={'/about'} className={linkClassName} >About us</Link>
            <Link to={'/about-the-breed'} className={linkClassName} >About the breed</Link>
            <Link to={'/appearance'} className={linkClassName} >Appearance</Link>
          </div>
          <div>
            <Link to={'/personality'} className={linkClassName} >Personality</Link>
            <Link to={'/FAQ'} className={linkClassName} >FAQ</Link>
          </div>
          <div>
            {/* <Link to={'/around-the-world'} className={linkClassName} >Silverglows around the world</Link> */}
          </div>
        </div>
      <div>

        {/* web view */}
        <div className='flex-wrap space-x-1 px-10 py-5 space-y-5 hidden sm:block sm:p-5 sm:space-x-5'>
          <Link to={'/about'} className={linkClassName}>About us</Link>
          <Link to={'/about-the-breed'} className={linkClassName}>About the breed</Link>
          <Link to={'/appearance'} className={linkClassName}>Appearance</Link>
          <Link to={'/personality'} className={linkClassName}>Personality</Link>
          <Link to={'/FAQ'} className={linkClassName}>FAQ</Link>
        </div>
      </div>
    </div>
  )
}
