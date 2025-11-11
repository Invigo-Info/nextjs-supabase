'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 0.95)']
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#features', label: 'Features', isHash: true },
    { href: '#how-it-works', label: 'How It Works', isHash: true },
    { href: '#pricing', label: 'Pricing', isHash: true },
    { href: '/contact', label: 'Contact', isHash: false },
  ]

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const element = document.querySelector(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-lg backdrop-blur-lg' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                SupaBase
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.isHash ? (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                >
                  {link.label}
                </motion.a>
              ) : (
                <Link key={link.href} href={link.href}>
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-700 hover:text-primary-600 transition-colors font-medium cursor-pointer inline-block"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              )
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors"
              >
                Sign In
              </motion.button>
            </Link>
            <Link href="/signup">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(14, 165, 233, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white/95 backdrop-blur-lg"
      >
        <div className="px-4 py-6 space-y-4">
          {navLinks.map((link) => (
            link.isHash ? (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={(e) => {
                  handleScrollTo(e, link.href)
                  setIsOpen(false)
                }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-primary-600 transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            )
          ))}
          <div className="pt-4 space-y-3 border-t border-gray-200">
            <Link href="/login" className="block">
              <button className="w-full text-gray-700 hover:text-primary-600 font-medium py-2 text-left">
                Sign In
              </button>
            </Link>
            <Link href="/signup" className="block">
              <button className="w-full bg-gradient-to-r from-primary-500 to-primary-700 text-white px-6 py-3 rounded-lg font-medium shadow-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}
