import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* NAME */}
          <div className="flex-shrink-0 flex items-center">
            <span className="ml-2 text-2xl hover:scale-105 cursor-pointer transition-all duration-300  ease-in-out font-bold text-white">
              SILA's HUB
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#hero"
                className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                Products
              </a>
              <a
                href="#about"
                className="text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out md:hidden mobile-menu`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#hero"
            className="block text-white hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <a
            href="#services"
            className="block text-white hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium"
          >
            Services
          </a>
          <a
            href="#projects"
            className="block text-white hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium"
          >
            Products
          </a>
          <a
            href="#about"
            className="block text-white hover:text-gray-400 px-3 py-2 rounded-md text-base font-medium"
          >
            About
          </a>
          <a
            href="#contact"
            className="block  bg-gray-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-gray-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
