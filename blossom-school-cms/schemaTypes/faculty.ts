import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'faculty',
  title: 'Faculty Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Position/Role',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'qualification',
      title: 'Qualification',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          {title: 'Administration', value: 'Administration'},
          {title: 'Science', value: 'Science'},
          {title: 'Languages', value: 'Languages'},
          {title: 'Mathematics', value: 'Mathematics'},
          {title: 'Social Science', value: 'Social Science'},
          {title: 'Primary', value: 'Primary'},
          {title: 'Arts & Culture', value: 'Arts'},
          {title: 'Physical Education', value: 'Sports'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Years of Experience',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'specialization',
      title: 'Specialization',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
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
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
})
