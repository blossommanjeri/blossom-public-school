import { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactInfo from '@/components/contact/ContactInfo'
import ContactForm from '@/components/contact/ContactForm'
import LocationMap from '@/components/contact/LocationMap'
import OfficeHours from '@/components/contact/OfficeHours'

export const metadata: Metadata = {
  title: 'Contact Us | Get in Touch | Blossom Public School Manjeri',
  description: 'Contact Blossom Public School Manjeri. Phone: +91 9895277499, Email: blossomschoolmji@gmail.com. Visit us at Cherani, Thrikkalangodu PO, Manjeri, Kerala - 676123',
  keywords: ['contact school', 'school location manjeri', 'school phone number', 'school email', 'visit school', 'school address'],
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <LocationMap />
      <OfficeHours />
    </>
  )
}
