import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'contactSubmission',
  title: 'Contact Form Submissions',
  type: 'document',
  readOnly: true, // Prevent manual editing
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'subject',
      title: 'Subject',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Read', value: 'read'},
          {title: 'Replied', value: 'replied'},
          {title: 'Archived', value: 'archived'},
        ],
      },
      initialValue: 'new',
    }),
    defineField({
      name: 'notes',
      title: 'Internal Notes',
      type: 'text',
      description: 'Staff notes (not visible to user)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      status: 'status',
    },
    prepare(selection) {
      const {title, subtitle, status} = selection
      const emoji = status === 'new' ? '🆕' : status === 'read' ? '👀' : status === 'replied' ? '✅' : '📁'
      return {
        title: `${emoji} ${title}`,
        subtitle: subtitle,
      }
    },
  },
})
