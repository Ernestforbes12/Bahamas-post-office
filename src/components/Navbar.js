import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-navy text-white px-6 py-4 flex items-center justify-between">
      
      {/* Logo */}
      {/* Logo */}
<div className="flex items-center gap-3">
  <img
    src="/post-logo.webp"
    alt="Bahamas Post Office"
    className="h-10 w-auto"
  />
</div>

      {/* Desktop Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Savings Bank</li>
        <li className="bg-teal text-white px-4 py-2 rounded-full">
          Track Package
        </li>
      </ul>

      {/* Hamburger Button */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-navy flex flex-col gap-4 px-6 py-4 md:hidden">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Savings Bank</li>
          <li>Track Package</li>
        </ul>
      )}

    </nav>
  );
}

export default Navbar;