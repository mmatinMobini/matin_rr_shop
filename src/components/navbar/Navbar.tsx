import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('/store')

  const navLinks = [
    { to: '/', label: 'خانه' },
    { to: '/Store', label: 'فروشگاه' },
  ]

  return (
    <div className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className="
          mx-auto max-w-5xl
          bg-white/80 backdrop-blur-xl
          border border-amber-100/70
          rounded-full
          shadow-[0_8px_30px_-8px_rgba(43,36,32,0.15)]
          transition-shadow duration-300
        "
      >
        <div className="h-14 sm:h-16 px-3 sm:px-5 flex items-center justify-between flex-row-reverse">

          {/* نشان برند */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="w-9 h-9 rounded-full bg-gradient-to-br from-[#9a4b1f] to-amber-500 flex items-center justify-center text-white text-sm font-bold shadow-[0_4px_12px_-2px_rgba(154,75,31,0.5)]">
              M
            </span>
            <span className="hidden sm:block text-sm font-bold text-[#2b2420]">
              matinButi
            </span>
          </Link>

          {/* لینک‌های دسکتاپ — با اندیکاتور نقطه‌ای به‌جای پس‌زمینه پر */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.to
              return (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    onClick={() => setActive(link.to)}
                    className={`
                      relative flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium
                      transition-colors duration-200
                      ${isActive ? 'text-[#9a4b1f]' : 'text-[#6b6259] hover:text-[#9a4b1f]'}
                    `}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#9a4b1f]" />}
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* اکشن‌ها */}
          <div className="flex items-center gap-2">

            {/* دکمه سبد خرید — آیکونی و گرد */}
            <button
              className="
                relative w-11 h-11 flex items-center justify-center rounded-full
                bg-[#9a4b1f] hover:bg-[#7c3a15] active:scale-90
                text-white
                shadow-[0_6px_16px_-4px_rgba(154,75,31,0.5)]
                transition-all duration-200
              "
              aria-label="سبد خرید"
            >
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
              <span className="absolute -top-1 -left-1 w-[18px] h-[18px] flex items-center justify-center rounded-full bg-white text-[#9a4b1f] text-[10px] font-bold shadow-sm">
                2
              </span>
            </button>

            {/* دکمه همبرگری موبایل */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="
                md:hidden w-11 h-11 flex items-center justify-center rounded-full
                text-[#2b2420]
                hover:bg-[#f7f3ee]
                transition-colors duration-200
              "
              aria-label="باز و بسته کردن منو"
            >
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
                {isOpen ? (
                  <path d="M18 6 6 18M6 6l12 12" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* منوی موبایل — کارت شناور جدا، نه بخشی چسبیده به نوار */}
      <div
        className={`md:hidden mx-auto max-w-5xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
        }`}
      >
        <div className="bg-white/90 backdrop-blur-xl border border-amber-100/70 rounded-3xl shadow-[0_12px_28px_-8px_rgba(43,36,32,0.15)] p-2">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => {
                    setActive(link.to)
                    setIsOpen(false)
                  }}
                  className="block px-4 py-3 rounded-2xl text-sm font-medium text-[#6b6259] hover:bg-[#f7f3ee] hover:text-[#9a4b1f] transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar