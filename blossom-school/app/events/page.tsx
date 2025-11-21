import { Metadata } from 'next'
import EventsContent from '@/components/events/EventsContent'

export const metadata: Metadata = {
  title: 'Events & Activities | Blossom Public School Manjeri',
  description: 'Explore upcoming and past events at Blossom Public School Manjeri. Annual day, sports day, cultural programs, and more.',
  keywords: ['school events', 'annual day', 'sports day', 'cultural programs', 'school calendar manjeri'],
}

export default function EventsPage() {
  return <EventsContent />
}
