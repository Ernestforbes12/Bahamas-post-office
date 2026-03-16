import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy text-white px-6 py-4 flex items-center justify-between relative z-50 border-b border-gray-700">
      
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
         src="/gov-logo.webp"
         alt="Government of The Bahamas"
         className="h-10 w-auto"
       />
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li className="cursor-pointer hover:text-teal transition-colors">Home</li>
        <li className="cursor-pointer hover:text-teal transition-colors">About</li>
        <li className="cursor-pointer hover:text-teal transition-colors">Services</li>
        <li className="cursor-pointer hover:text-teal transition-colors">Savings Bank</li>
        <li className="bg-teal text-white px-4 py-2 rounded-full cursor-pointer">
          Track Package
        </li>
      </ul>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-2xl z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-full left-0 w-full bg-navy flex flex-col gap-4 px-6 py-6 md:hidden z-50 border-t border-gray-700">
          <li className="cursor-pointer hover:text-teal transition-colors">Home</li>
          <li className="cursor-pointer hover:text-teal transition-colors">About</li>
          <li className="cursor-pointer hover:text-teal transition-colors">Services</li>
          <li className="cursor-pointer hover:text-teal transition-colors">Savings Bank</li>
          <li className="bg-teal text-white px-4 py-2 rounded-full text-center cursor-pointer">
            Track Package
          </li>
        </ul>
      )}

    </nav>
  );
}

export default Navbar;