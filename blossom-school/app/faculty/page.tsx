import { Metadata } from 'next'
import FacultyContent from '@/components/faculty/FacultyContent'
import FacultyHero from '@/components/faculty/FacultyHero'

// 1. Next.js Metadata for SEO
export const metadata: Metadata = {
  title: 'Our Faculty | Experienced Teachers | Blossom Public School Manjeri',
  description: 'Meet our dedicated and qualified teaching staff at Blossom Public School Manjeri. Experienced educators committed to student success and holistic development.',
  keywords: ['school faculty', 'teachers', 'qualified staff', 'teaching staff manjeri', 'experienced educators'],
}

// 2. Default Page Component
export default function FacultyPage() {
  return (
    // NOTE: Components must be wrapped in a single parent element (like <main> or <>)
    <main>
      <FacultyHero/>
      <FacultyContent />
    </main>
  )
}