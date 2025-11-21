'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'
import { FiMenu, FiX, FiChevronDown, FiPhone, FiMail } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/academics', label: 'Academics' },
  { href: '/faculty', label: 'Faculty' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/admissions', label: 'Admissions' },
  { 
    label: 'Updates',
    submenu: [
      { href: '/announcements', label: 'Announcements' },
      { href: '/news', label: 'News' },
      { href: '/events', label: 'Events' },
      { href: '/downloads', label: 'Downloads' },
    ]
  },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
    setOpenSubmenu(null)
  }, [pathname])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const isActive = (href: string) => pathname === href

  return (
    <>
      {/* Top Info Bar */}
      <div 
        className="hidden lg:block py-2.5"
        style={{ backgroundColor: 'var(--pace-900)', color: 'white' }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+919895277499" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <FiPhone className="w-4 h-4" />
                <span>+91 9895277499</span>
              </a>
              <a href="mailto:blossomschoolmji@gmail.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <FiMail className="w-4 h-4" />
                <span>blossomschoolmji@gmail.com</span>
              </a>
            </div>
            <div className="flex items-center">
              <span className="opacity-90">Part of Pace Education Group</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-lg' : 'shadow-md'
        }`}
        style={{
          backgroundColor: 'white',
        }}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 lg:gap-4 focus-ring group">
              {/* Blossom Logo */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 flex-shrink-0">
                <Image
                  src="/logo/blossom-logo-bg.png"
                  alt="Blossom Public School Logo"
                  fill
                  className="object-contain transition-transform group-hover:scale-105"
                  priority
                />
              </div>
              
              <div className="flex flex-col">
                <span
                  className="text-lg md:text-xl lg:text-2xl font-bold leading-tight"
                  style={{ 
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--pace-800)',
                  }}
                >
                  Blossom Public School
                </span>
                <span
                  className="text-xs md:text-sm lg:text-base"
                  style={{ color: 'var(--neutral-600)' }}
                >
                  Manjeri, Kerala
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-1">
              {navigationLinks.map((link) => (
                <div key={link.label} className="relative group">
                  {link.submenu ? (
                    <>
                      <button
                        className="px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 flex items-center gap-1.5 focus-ring"
                        style={{
                          color: 'var(--pace-800)',
                          fontFamily: 'var(--font-heading)',
                        }}
                        onMouseEnter={() => setOpenSubmenu(link.label)}
                        onMouseLeave={() => setOpenSubmenu(null)}
                      >
                        {link.label}
                        <FiChevronDown className="w-4 h-4" />
                      </button>
                      
                      <AnimatePresence>
                        {openSubmenu === link.label && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 mt-1 w-52 rounded-xl shadow-xl py-2 overflow-hidden border"
                            style={{
                              backgroundColor: 'white',
                              borderColor: 'var(--neutral-200)',
                            }}
                            onMouseEnter={() => setOpenSubmenu(link.label)}
                            onMouseLeave={() => setOpenSubmenu(null)}
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.href}
                                href={sublink.href}
                                className="block px-4 py-3 text-sm transition-colors hover:bg-pace-50"
                                style={{
                                  color: isActive(sublink.href) ? 'var(--pace-700)' : 'var(--neutral-800)',
                                  fontWeight: isActive(sublink.href) ? 600 : 500,
                                  fontFamily: 'var(--font-heading)',
                                  backgroundColor: isActive(sublink.href) ? 'var(--pace-50)' : 'transparent',
                                }}
                              >
                                {sublink.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-300 focus-ring relative"
                      style={{
                        color: isActive(link.href) ? 'var(--pace-700)' : 'var(--pace-800)',
                        fontFamily: 'var(--font-heading)',
                        backgroundColor: isActive(link.href) ? 'var(--pace-50)' : 'transparent',
                      }}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Link href="/admissions" className="hidden lg:block">
                <Button
                  variant="primary"
                  size="md"
                  style={{ 
                    backgroundColor: 'var(--coral-500)',
                    color: 'white',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                  }}
                >
                  Enroll Now
                </Button>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden p-2 rounded-lg transition-colors"
                style={{ color: 'var(--pace-800)' }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm xl:hidden z-40"
              style={{ top: '106px' }}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 bottom-0 w-full sm:w-96 shadow-2xl overflow-y-auto xl:hidden z-50"
              style={{
                top: '106px',
                backgroundColor: 'white',
              }}
            >
              <nav className="p-6 space-y-2">
                {navigationLinks.map((link) => (
                  <div key={link.label}>
                    {link.submenu ? (
                      <>
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === link.label ? null : link.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-base font-semibold rounded-xl transition-all"
                          style={{
                            backgroundColor: openSubmenu === link.label ? 'var(--pace-50)' : 'transparent',
                            color: 'var(--pace-900)',
                            fontFamily: 'var(--font-heading)',
                          }}
                        >
                          {link.label}
                          <FiChevronDown 
                            className={`w-5 h-5 transition-transform ${openSubmenu === link.label ? 'rotate-180' : ''}`} 
                          />
                        </button>
                        
                        <AnimatePresence>
                          {openSubmenu === link.label && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="ml-4 mt-1 space-y-1 overflow-hidden"
                            >
                              {link.submenu.map((sublink) => (
                                <Link
                                  key={sublink.href}
                                  href={sublink.href}
                                  className="block px-4 py-3 text-sm rounded-xl transition-all"
                                  style={{
                                    backgroundColor: isActive(sublink.href) ? 'var(--pace-100)' : 'transparent',
                                    color: isActive(sublink.href) ? 'var(--pace-700)' : 'var(--neutral-800)',
                                    fontWeight: isActive(sublink.href) ? 600 : 500,
                                    fontFamily: 'var(--font-heading)',
                                  }}
                                >
                                  {sublink.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className="block px-4 py-3 text-base font-semibold rounded-xl transition-all"
                        style={{
                          backgroundColor: isActive(link.href) ? 'var(--pace-50)' : 'transparent',
                          color: isActive(link.href) ? 'var(--pace-700)' : 'var(--pace-900)',
                          fontFamily: 'var(--font-heading)',
                        }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4">
                  <Link href="/admissions">
                    <Button
                      variant="primary"
                      size="md"
                      fullWidth
                      style={{ 
                        backgroundColor: 'var(--coral-500)',
                        color: 'white',
                        fontFamily: 'var(--font-heading)',
                        fontWeight: 600,
                      }}
                    >
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
