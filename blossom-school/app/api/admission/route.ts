import { NextRequest, NextResponse } from 'next/server'
import { createAdmissionSubmission } from '@/lib/sanity'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.studentName || !data.parentName || !data.email || !data.grade) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create submission in Sanity
    const result = await createAdmissionSubmission({
      studentName: data.studentName,
      dateOfBirth: data.dateOfBirth || '',
      grade: data.grade,
      parentName: data.parentName,
      email: data.email,
      phone: data.phone || '',
      address: data.address || '',
      previousSchool: data.previousSchool || '',
    })

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully', id: result._id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Admission form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}
