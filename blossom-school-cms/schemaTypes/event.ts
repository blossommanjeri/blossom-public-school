import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Cultural', value: 'Cultural'},
          {title: 'Sports', value: 'Sports'},
          {title: 'Academic', value: 'Academic'},
          {title: 'Meeting', value: 'Meeting'},
          {title: 'Examination', value: 'Examination'},
          {title: 'Holiday', value: 'Holiday'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Event Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'time',
      title: 'Event Time',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'E.g., 10:00 AM - 2:00 PM',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Past', value: 'past'},
          {title: 'Cancelled', value: 'cancelled'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Event Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      date: 'date',
    },
    prepare(selection) {
      const {title, category, date} = selection
      return {
        title,
        subtitle: `${category} - ${date}`,
      }
    },
  },
})
