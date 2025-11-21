import { Metadata } from 'next'
import FacilitiesHero from '@/components/facilities/FacilitiesHero'
import InfrastructureSection from '@/components/facilities/InfrastructureSection'
import LabsSection from '@/components/facilities/LabsSection'
import LibrarySection from '@/components/facilities/LibrarySection'
import SportsSection from '@/components/facilities/SportsSection'
import TransportSection from '@/components/facilities/TransportSection'

export const metadata: Metadata = {
  title: 'Facilities | Modern Infrastructure & Labs | Blossom Public School Manjeri',
  description: 'State-of-the-art facilities including smart classrooms, science labs, library, sports complex, and safe transport. Best infrastructure for quality education in Manjeri.',
  keywords: ['school facilities', 'smart classrooms', 'science labs', 'sports facilities', 'school library', 'school transport manjeri'],
}

export default function FacilitiesPage() {
  return (
    <>
      <FacilitiesHero />
      <InfrastructureSection />
      <LabsSection />
      <LibrarySection />
      <SportsSection />
      <TransportSection />
    </>
  )
}
