import { Metadata } from 'next'
import GalleryHero from '@/components/gallery/GalleryHero'
import GalleryGrid from '@/components/gallery/GalleryGrid'

export const metadata: Metadata = {
  title: 'Gallery | School Life & Events | Blossom Public School Manjeri',
  description: 'Explore our vibrant school life through photos of events, activities, sports, cultural programs, and daily campus moments at Blossom Public School Manjeri.',
  keywords: ['school gallery', 'school events', 'campus life', 'school activities manjeri', 'annual day', 'sports day', 'cultural events'],
}

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
    </>
  )
}
