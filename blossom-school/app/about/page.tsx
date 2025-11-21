import { Metadata } from 'next'
import AboutHero from '@/components/about/AboutHero'
import IntroSection from '@/components/about/IntroSection'
import VisionMissionSection from '@/components/about/VisionMissionSection'
import LeadershipSection from '@/components/about/LeadershipSection'
import ValuesSection from '@/components/about/ValuesSection'
import TimelineSection from '@/components/about/TimelineSection'
import WhyChooseSection from '@/components/about/WhyChooseSection'

export const metadata: Metadata = {
  title: 'About Us | Blossom Public School Manjeri | Pace Education Group',
  description: 'Learn about Blossom Public School Manjeri, part of Pace Education Group founded by P. A. Ibrahim Haji. Discover our vision, mission, values, and commitment to quality education in Kerala.',
  keywords: [
    'Blossom Public School Manjeri',
    'About Blossom School',
    'Pace Education Group',
    'P. A. Ibrahim Haji',
    'Best school in Manjeri',
    'Kerala State Board school',
    'Quality education Manjeri',
    'School vision mission Manjeri',
    'Educational institutions Kerala',
  ],
  openGraph: {
    title: 'About Blossom Public School Manjeri - Part of Pace Education Group',
    description: 'Quality education since 2003. Learn about our vision, mission, and leadership under Pace Education Group founded by P. A. Ibrahim Haji.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <IntroSection />
      <VisionMissionSection />
      <LeadershipSection />
      <ValuesSection />
      <TimelineSection />
      <WhyChooseSection />
    </>
  )
}
