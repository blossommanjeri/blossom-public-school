'use client'

import Link from 'next/link'
import Image from 'next/image' // Ensure Image is imported
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const footerLinks = {
  quickLinks: [
    { href: '/about', label: 'About Us' },
    { href: '/academics', label: 'Academics' },
    { href: '/admissions', label: 'Admissions' },
    { href: '/faculty', label: 'Faculty' },
  ],
  resources: [
    { href: '/facilities', label: 'Facilities' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/downloads', label: 'Downloads' },
    { href: '/announcements', label: 'Announcements' },
    { href: '/careers', label: 'Careers' },
  ],
}

const socialLinks = [
  { 
    icon: FiFacebook, 
    href: 'https://www.facebook.com/blossom.manjeri', 
    label: 'Facebook',
  },
  { 
    icon: FiInstagram, 
    href: 'https://www.instagram.com/blossommanjeri', 
    label: 'Instagram',
  },
  { 
    icon: FaWhatsapp, 
    href: 'https://api.whatsapp.com/send/?phone=919895277499&text&type=phone_number&app_absent=0', 
    label: 'WhatsApp',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: 'var(--pace-900)', color: 'white' }}>
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Column with Logo */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div
                // ADDED 'relative' and 'overflow-hidden' for the Image component to work with 'fill'
                className="w-20 h-20 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0 relative overflow-hidden" 
                style={{ backgroundColor: 'var(--pace-50)' }}
              >
                {/* START: LOGO IMAGE REPLACEMENT */}
                <Image
                  src="/logo/blossom-logo-bg.png" // CORRECTED PATH
                  alt="Blossom Public School Logo"
                  fill
                  // The logo you showed is primarily green. To make it stand out against the 
                  // coral background and fit the circle better, let's adjust padding.
                  style={{ objectFit: 'contain', padding: '6px' }} 
                  sizes="40px"
                />
                {/* END: LOGO IMAGE REPLACEMENT */}
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold leading-tight" style={{ fontFamily: 'var(--font-heading)' }}>
                  Blossom Public School
                </span>
                <span className="text-xs opacity-80">Manjeri, Kerala</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 mb-6 leading-relaxed">
              Excellence in education since 2003.
            </p>

          </div>

          {/* Quick Links - Hidden on mobile, shown on md+ */}
          <div className="hidden md:block">
            <h3 className="text-base font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Hidden on mobile, shown on md+ */}
          <div className="hidden md:block">
            <h3 className="text-base font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <FiPhone className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href="tel:+919895277499" className="hover:opacity-100 transition-opacity">
                  +91 9895277499
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <FiMail className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <a href="mailto:blossomschoolmji@gmail.com" className="hover:opacity-100 transition-opacity break-all">
                  blossomschoolmji@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <FiMapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Cherani, Manjeri, Kerala - 676123</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg flex items-center justify-center transition-all hover:scale-110"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Links - Only visible on mobile */}
        <div className="md:hidden mt-8 pt-8 border-t grid grid-cols-2 gap-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
          <div>
            <h3 className="text-sm font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs opacity-80 hover:opacity-100 transition-opacity inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
              Resources
            </h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs opacity-80 hover:opacity-100 transition-opacity inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t py-6"
        style={{ borderColor: 'rgba(255,255,255,0.1)' }}
      >
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm opacity-80">
            <p className="text-center md:text-left">
              © {currentYear} Blossom Public School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:opacity-100 transition-opacity">
                Privacy
              </Link>
              <Link href="/terms" className="hover:opacity-100 transition-opacity">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}