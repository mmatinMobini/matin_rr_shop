import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { to: '/Store', label: 'فروشگاه' },
    { to: '/', label: 'خانه' },
  ]

  return (
    <nav className="sticky top-0 z-50 h-16 border-b border-amber-200/50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="h-full max-w-6xl mx-auto px-4 flex items-center justify-between flex-row-reverse">
        
        {/* لینک‌های دسکتاپ */}
        <ul className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="px-4 py-2 rounded-lg text-gray-700 font-medium transition-colors duration-200 hover:bg-amber-100 hover:text-amber-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* بج سبد خرید */}
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-amber-300 bg-amber-50 text-amber-700 font-semibold text-sm shadow-sm hover:bg-amber-100 hover:shadow-md transition-all duration-200 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18" />
            <path d="M16 10a4 4 0 0 1-8 0" />
          </svg>
          <span>سبد خرید</span>
        </div>

        {/* دکمه همبرگری موبایل */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-amber-100 hover:text-amber-700 transition-colors"
          aria-label="باز و بسته کردن منو"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M18 6 6 18M6 6l12 12" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* منوی کشویی موبایل */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/90 backdrop-blur-md border-b border-amber-200/50 ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 rounded-lg text-gray-700 font-medium transition-colors hover:bg-amber-100 hover:text-amber-700"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar