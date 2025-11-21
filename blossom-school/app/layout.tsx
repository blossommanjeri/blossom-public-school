import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Open_Sans, Montserrat } from 'next/font/google'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AdmissionPopup from '@/components/ui/AdmissionPopup'

// Font configurations
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-opensans',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Blossom Public School Manjeri | Excellence in Education | Pace Education Group',
  description: 'Part of the prestigious Pace Education Group, Blossom Public School Manjeri offers quality Kerala syllabus education with modern facilities, nurturing young minds for future success.',
  keywords: ['Blossom Public School', 'Manjeri school', 'Kerala syllabus', 'Pace Education Group', 'best school Manjeri', 'CBSE school Kerala'],
  authors: [{ name: 'Blossom Public School Manjeri' }],
  openGraph: {
    title: 'Blossom Public School Manjeri | Excellence in Education',
    description: 'Where education meets excellence and nurtures future leaders.',
    url: 'https://blossomschoolmanjeri.com',
    siteName: 'Blossom Public School Manjeri',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blossom Public School Manjeri Campus',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blossom Public School Manjeri',
    description: 'Where education meets excellence and nurtures future leaders.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`${poppins.variable} ${openSans.variable} ${montserrat.variable} antialiased`}
        style={{
          fontFamily: 'var(--font-opensans), Arial, Helvetica, sans-serif',
          backgroundColor: 'var(--neutral-50)',
          color: 'var(--neutral-900)'
        }}
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only"
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            backgroundColor: 'white',
            color: 'var(--pace-700)',
            padding: '0.75rem 1rem',
            borderRadius: '0.5rem',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            zIndex: 50,
            fontWeight: 600
          }}
        >
          Skip to content
        </a>
        
        <Header />
        <main id="main" style={{ minHeight: '100vh' }}>
          {children}
        </main>
        <Footer />
        <AdmissionPopup />
      </body>
    </html>
  )
}

