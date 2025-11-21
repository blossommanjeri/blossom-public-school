import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'leadership',
  title: 'Leadership',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          {title: 'Founder', value: 'founder'},
          {title: 'Principal', value: 'principal'},
          {title: 'Manager', value: 'manager'},
          {title: 'Vice Principal', value: 'vice-principal'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Designation',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'E.g., Founder & Chairman, Principal, Manager',
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'quote',
      title: 'Quote (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
