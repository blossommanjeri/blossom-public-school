import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'announcement',
  title: 'Announcements',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      validation: (Rule) => Rule.required().max(500),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Admissions', value: 'Admissions'},
          {title: 'Events', value: 'Events'},
          {title: 'Examinations', value: 'Examinations'},
          {title: 'Holiday', value: 'Holiday'},
          {title: 'Meetings', value: 'Meetings'},
          {title: 'General', value: 'General'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'urgent',
      title: 'Mark as Urgent',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      urgent: 'urgent',
    },
    prepare(selection) {
      const {title, category, urgent} = selection
      return {
        title: urgent ? `🔴 ${title}` : title,
        subtitle: category,
      }
    },
  },
})
