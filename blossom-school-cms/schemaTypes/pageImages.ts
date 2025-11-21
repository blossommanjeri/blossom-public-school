import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'pageImages',
  title: 'Page Images',
  type: 'document',
  fields: [
    // SHARED IMAGES (Home & About)
    defineField({
      name: 'mainCampusImage',
      title: 'Main Campus Image',
      description: 'Used in Home and About pages',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'classroomImage',
      title: 'Classroom Image',
      description: 'Used in Home and About pages',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'activitiesImage',
      title: 'Activities Image',
      description: 'Used in Home and About pages',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    // ACADEMIC PAGE SPECIFIC
    defineField({
      name: 'academicClassroomImage',
      title: 'Academic Page - Classroom Image',
      description: 'Used in Academics page',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    // FACILITIES PAGE SPECIFIC
    defineField({
      name: 'scienceLabImage',
      title: 'Science Lab Image',
      description: 'Used in Facilities page',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'libraryImage',
      title: 'Library Image',
      description: 'Used in Facilities page',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'computerLabImage',
      title: 'Computer Lab Image',
      description: 'Used in Facilities page',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'playgroundImage',
      title: 'Playground Image',
      description: 'Used in Facilities page',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Page Images Settings',
        subtitle: 'Manage all page images from here',
      }
    },
  },
})
