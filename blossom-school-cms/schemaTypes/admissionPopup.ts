import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'admissionPopup',
  title: 'Admission Popup',
  type: 'document',
  fields: [
    defineField({
      name: 'enabled',
      title: 'Enable Popup',
      type: 'boolean',
      description: 'Turn popup on/off',
      initialValue: true,
    }),
    defineField({
      name: 'title',
      title: 'Popup Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      initialValue: 'Admissions Open for 2025-26!',
    }),
    defineField({
      name: 'message',
      title: 'Popup Message',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
      initialValue: 'Limited seats available. Apply now to secure your child\'s future with quality education.',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Apply Now',
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
      description: 'E.g., /admissions',
      initialValue: '/admissions',
    }),
    defineField({
      name: 'image',
      title: 'Popup Image (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      options: {
        list: [
          {title: 'Pace Blue', value: 'pace'},
          {title: 'Coral', value: 'coral'},
          {title: 'Fresh Green', value: 'fresh'},
          {title: 'Gold', value: 'gold'},
        ],
      },
      initialValue: 'pace',
    }),
    defineField({
      name: 'delaySeconds',
      title: 'Show After (seconds)',
      type: 'number',
      description: 'Delay before showing popup',
      initialValue: 2,
      validation: (Rule) => Rule.min(0).max(30),
    }),
    defineField({
      name: 'showOnce',
      title: 'Show Only Once Per Session',
      type: 'boolean',
      description: 'If enabled, popup shows only once per browser session',
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Admission Popup Settings',
      }
    },
  },
})
