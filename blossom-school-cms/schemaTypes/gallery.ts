import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'gallery',
  title: 'Gallery Images',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Image Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'All', value: 'all'},
          {title: 'Events', value: 'events'},
          {title: 'Classrooms', value: 'classrooms'},
          {title: 'Sports', value: 'sports'},
          {title: 'Labs', value: 'labs'},
          {title: 'Cultural', value: 'cultural'},
          {title: 'Facilities', value: 'facilities'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Image',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category',
    },
    prepare(selection) {
      const {title, category} = selection
      return {
        ...selection,
        subtitle: category,
      }
    },
  },
})
