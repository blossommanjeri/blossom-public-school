import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'download',
  title: 'Downloads',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
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
          {title: 'Forms', value: 'Forms'},
          {title: 'Timetables', value: 'Timetables'},
          {title: 'Circulars', value: 'Circulars'},
          {title: 'Syllabuses', value: 'Syllabuses'},
          {title: 'Results', value: 'Results'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'Upload File (PDF/DOC)',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Upload Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fileSize',
      title: 'File Size (e.g., 250 KB)',
      type: 'string',
    }),
    defineField({
      name: 'important',
      title: 'Mark as Important',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      important: 'important',
    },
    prepare(selection) {
      const {title, category, important} = selection
      return {
        title: important ? `⭐ ${title}` : title,
        subtitle: `${category} - PDF`,
      }
    },
  },
})
