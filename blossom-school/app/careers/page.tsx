import { Metadata } from 'next'
import CareersContent from '@/components/careers/CareersContent'

export const metadata: Metadata = {
  title: 'Careers | Join Our Team | Blossom Public School Manjeri',
  description: 'Explore career opportunities at Blossom Public School Manjeri. Join our team of dedicated educators and contribute to shaping young minds.',
  keywords: ['teaching jobs', 'school careers', 'teaching positions manjeri', 'school jobs', 'education careers'],
}

export default function CareersPage() {
  return <CareersContent />
}
