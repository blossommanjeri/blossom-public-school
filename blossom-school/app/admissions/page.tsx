import { Metadata } from 'next'
import AdmissionsHero from '@/components/admissions/AdmissionsHero'
import AdmissionProcess from '@/components/admissions/AdmissionProcess'
import FeeStructure from '@/components/admissions/FeeStructure'
import RequiredDocuments from '@/components/admissions/RequiredDocuments'
import AdmissionFAQ from '@/components/admissions/AdmissionFAQ'
import EnquiryForm from '@/components/admissions/EnquiryForm'

export const metadata: Metadata = {
  title: 'Admissions 2026-27 | Enroll at Blossom Public School Manjeri',
  description: 'Admissions open for 2026-27 academic year at Blossom Public School Manjeri. Kerala State Board from KG to Class 10. Online application, fee structure, and admission process details.',
  keywords: ['school admission 2025', 'manjeri school admission', 'kerala state board admission', 'school enrollment', 'admission process', 'school fees manjeri'],
}

export default function AdmissionsPage() {
  return (
    <>
      <AdmissionsHero />
      
      <AdmissionProcess />
      <EnquiryForm />
      {/* <FeeStructure /> */}
      <RequiredDocuments />
      <AdmissionFAQ />
    </>
  )
}
