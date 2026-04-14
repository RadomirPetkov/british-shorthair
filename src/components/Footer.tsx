import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="bg-stud border-t border-white/10 text-white/60">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col items-center gap-5">
        <p className="text-white/90 text-sm font-light tracking-widest uppercase">SilverGlow British Shorthair</p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          <Link to="/kittens" className="hover:text-white transition-colors">Available Kittens</Link>
          <Link to="/studs" className="hover:text-white transition-colors">Studs</Link>
          <Link to="/queens" className="hover:text-white transition-colors">Queens</Link>
          <Link to="/about-the-breed" className="hover:text-white transition-colors">About the Breed</Link>
          <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link to="/FAQ" className="hover:text-white transition-colors">FAQ</Link>
        </nav>
        <p className="text-xs text-white/30">&copy; {new Date().getFullYear()} SilverGlow British Shorthair. All rights reserved.</p>
      </div>
    </footer>
  )
}
