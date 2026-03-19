import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="absolute bottom-0 bg-blue-100 bg-opacity-60 rounded-t-full text-black w-full">
      <div className="w-screen m-auto py-2 flex flex-col items-center gap-1">
        <nav className="flex flex-wrap justify-center gap-3 text-xs">
          <Link to="/kittens" className="hover:underline">Available Kittens</Link>
          <Link to="/studs" className="hover:underline">Studs</Link>
          <Link to="/queens" className="hover:underline">Queens</Link>
          <Link to="/about-the-breed" className="hover:underline">About the Breed</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/FAQ" className="hover:underline">FAQ</Link>
        </nav>
        <p className="text-xs">SilverGlow British Shorthair &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
