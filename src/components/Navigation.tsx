'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? 'scrolled' : ''
        }`}
        data-nav
      >
        <div className="mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-3"
              onClick={closeMenu}
            >
              <div className="relative w-11 h-11 overflow-hidden rounded-full bg-gradient-to-br from-linear-accent/30 to-linear-accent/10 flex items-center justify-center shadow-md">
                <svg
                  className="w-8 h-8 text-linear-accent drop-shadow-sm"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2L3 7v5c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z" />
                  <text
                    x="12"
                    y="15"
                    fontFamily="Arial, sans-serif"
                    fontWeight="bold"
                    fontSize="9"
                    fill="white"
                    textAnchor="middle"
                    dominantBaseline="central"
                  >
                    LOGO
                  </text>
                </svg>
              </div>

              <span className="text-sm font-medium tracking-wide opacity-80 hover:opacity-100 transition-opacity">
                Secret Roleplay - Unified Police Department
              </span>
            </Link>

            <button
              className="menu-toggle p-2 opacity-80 hover:opacity-100 transition-opacity"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className="ri-menu-line text-lg"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 bg-linear-black transition-opacity duration-300 z-30 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        data-menu-overlay
      >
        <div className="mx-auto px-8 py-22">
          <div className="space-y-8">
            <Link
              href="/#home"
              className="block text-4xl font-medium opacity-60 hover:opacity-100 transition-opacity"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block text-4xl font-medium opacity-60 hover:opacity-100 transition-opacity"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/#features"
              className="block text-4xl font-medium opacity-60 hover:opacity-100 transition-opacity"
              onClick={closeMenu}
            >
              Features
            </Link>
            <Link
              href="/#team"
              className="block text-4xl font-medium opacity-60 hover:opacity-100 transition-opacity"
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link
              href="/#rules"
              className="block text-4xl font-medium opacity-60 hover:opacity-100 transition-opacity"
              onClick={closeMenu}
            >
              Rules
            </Link>
            <Link
              href="/#join"
              className="block text-4xl font-medium opacity-60 hover:opacity-100 transition-opacity"
              onClick={closeMenu}
            >
              Join
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
