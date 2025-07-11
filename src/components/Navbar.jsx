import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-b h-20 from-[#d9c1a0] to-white shadow-md px-4 py-3 relative flex justify-between items-center">
      {/* Left Spacer */}
      <div className="w-8"></div>

      {/* Center Logo */}
      <Link to="/" className="absolute left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-20 h-20 rounded-full border border-black flex items-center justify-center bg-white">
          <div className="text-center leading-tight">
            <h1 className="text-xs font-bold tracking-widest">
              <span>L</span>
              <span className="relative mx-[1px]">
                <span className="absolute inset-x-0 h-[1px] bg-black top-1/2 transform -translate-y-1/2"></span>
                <span className="mx-[1px]">O</span>
              </span>
              <span>J</span>
              <span>A</span>
            </h1>
            <p className="text-[6px] tracking-widest font-semibold">FASHION STORE</p>
          </div>
        </div>
      </Link>

      {/* Right Controls */}
      <div className="flex items-center gap-4 z-20">
        {/* Menu Toggle Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Shopping Bag */}
        <Link to="/cart">
          <ShoppingBag className="w-6 h-6" />
        </Link>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <div className="absolute right-4 top-[90%] mt-2 w-36 bg-white border border-black text-sm font-semibold shadow-lg z-50">
          <Link
            to="/men"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 border-b border-black hover:bg-gray-100 text-center"
          >
            Men
          </Link>
          <Link
            to="/women"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 border-b border-black hover:bg-gray-100 text-center"
          >
            Women
          </Link>
          <Link
            to="/accessories"
            onClick={() => setMenuOpen(false)}
            className="block px-4 py-2 hover:bg-gray-100 text-center"
          >
            Accessories
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
