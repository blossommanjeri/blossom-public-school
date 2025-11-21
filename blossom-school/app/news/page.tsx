import { Metadata } from 'next'
import NewsContent from '@/components/news/NewsContent'

export const metadata: Metadata = {
  title: 'News & Updates | Blossom Public School Manjeri',
  description: 'Read the latest news, achievements, and updates from Blossom Public School Manjeri. Stay connected with our school community.',
  keywords: ['school news', 'achievements', 'updates', 'school activities manjeri', 'student achievements'],
}

export default function NewsPage() {
  return <NewsContent />
}
