import { Metadata } from 'next'
import DownloadsContent from '@/components/downloads/DownloadsContent'

export const metadata: Metadata = {
  title: 'Downloads | Forms, Circulars & Timetables | Blossom Public School Manjeri',
  description: 'Download admission forms, exam timetables, school circulars, and important documents from Blossom Public School Manjeri.',
  keywords: ['school downloads', 'admission forms', 'exam timetable', 'school circulars', 'documents manjeri'],
}

export default function DownloadsPage() {
  return <DownloadsContent />
}
