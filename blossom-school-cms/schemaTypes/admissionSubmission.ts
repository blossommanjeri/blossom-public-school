import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'admissionSubmission',
  title: 'Admission Form Submissions',
  type: 'document',
  readOnly: true,
  fields: [
    defineField({
      name: 'studentName',
      title: 'Student Name',
      type: 'string',
    }),
    defineField({
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'date',
    }),
    defineField({
      name: 'grade',
      title: 'Grade Applying For',
      type: 'string',
    }),
    defineField({
      name: 'parentName',
      title: 'Parent/Guardian Name',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'previousSchool',
      title: 'Previous School',
      type: 'string',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    }),
    defineField({
      name: 'status',
      title: 'Application Status',
      type: 'string',
      options: {
        list: [
          {title: 'New Application', value: 'new'},
          {title: 'Under Review', value: 'review'},
          {title: 'Interview Scheduled', value: 'interview'},
          {title: 'Accepted', value: 'accepted'},
          {title: 'Waitlisted', value: 'waitlist'},
          {title: 'Rejected', value: 'rejected'},
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'studentName',
      subtitle: 'grade',
      status: 'status',
    },
    prepare(selection) {
      const {title, subtitle, status} = selection
      const statusEmoji: { [key: string]: string } = {
        new: '🆕',
        review: '📋',
        interview: '📅',
        accepted: '✅',
        waitlist: '⏳',
        rejected: '❌',
      }
      return {
        title: `${statusEmoji[status] || '📄'} ${title}`,
        subtitle: `Grade: ${subtitle}`,
      }
    },
  },
})
