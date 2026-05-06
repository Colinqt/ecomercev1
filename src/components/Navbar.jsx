import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Products', path: '#products' },
    { name: 'About', path: '#about' },
    { name: 'Contact', path: '#contact' },
  ]

  return (
    <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between py-4">
          
          <h1 className="text-2xl font-bold text-yellow-400">
            ShopEase
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  className="hover:text-yellow-400 transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden flex flex-col gap-4 pb-4 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}