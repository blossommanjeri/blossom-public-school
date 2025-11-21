import { Metadata } from 'next'
import AcademicsHero from '@/components/academics/AcademicsHero'
import CurriculumOverview from '@/components/academics/CurriculumOverview'
import ProgramsSection from '@/components/academics/ProgramsSection'
import TeachingMethodology from '@/components/academics/TeachingMethodology'
import AssessmentSection from '@/components/academics/AssessmentSection'
import AchievementsSection from '@/components/academics/AchievementsSection'

export const metadata: Metadata = {
  title: 'Academics | Kerala State Board Curriculum | Blossom Public School Manjeri',
  description: 'Comprehensive Kerala State Board education with modern teaching methods. Programs from Kindergarten to Higher Secondary. Excellence in academics, sports, and co-curricular activities.',
  keywords: ['kerala state board', 'curriculum', 'academic programs', 'KG to 12', 'school syllabus manjeri', 'holistic education'],
}

export default function AcademicsPage() {
  return (
    <>
      <AcademicsHero />
      <CurriculumOverview />
      <ProgramsSection />
      <TeachingMethodology />
      <AssessmentSection />
      <AchievementsSection />
    </>
  )
}
