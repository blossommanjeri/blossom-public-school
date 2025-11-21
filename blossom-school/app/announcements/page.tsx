import { Metadata } from 'next'
import AnnouncementsContent from '@/components/announcements/AnnouncementsContent'

export const metadata: Metadata = {
  title: 'Announcements | Latest Updates | Blossom Public School Manjeri',
  description: 'Stay updated with the latest announcements, notices, and important updates from Blossom Public School Manjeri.',
  keywords: ['school announcements', 'notices', 'updates', 'school news manjeri', 'important notices'],
}

export default function AnnouncementsPage() {
  return <AnnouncementsContent />
}
