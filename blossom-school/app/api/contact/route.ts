import { NextRequest, NextResponse } from 'next/server'
import { createContactSubmission } from '@/lib/sanity'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create submission in Sanity
    const result = await createContactSubmission({
      name: data.name,
      email: data.email,
      phone: data.phone || '',
      subject: data.subject || 'General Inquiry',
      message: data.message,
    })

    return NextResponse.json(
      { success: true, message: 'Form submitted successfully', id: result._id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}
