import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    // Contact Information
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'School Address',
      type: 'text',
    }),
    
    // Social Media
    defineField({
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'youtube',
      title: 'YouTube URL',
      type: 'url',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter URL',
      type: 'url',
    }),
    
    // Office Hours
    defineField({
      name: 'officeHours',
      title: 'Office Hours',
      type: 'string',
      description: 'E.g., Mon-Fri: 9AM-5PM',
    }),
    
    // Map Coordinates
    defineField({
      name: 'mapUrl',
      title: 'Google Maps Embed URL',
      type: 'url',
    }),
    
    // Admission Status
    defineField({
      name: 'admissionsOpen',
      title: 'Admissions Open',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'admissionYear',
      title: 'Admission Year',
      type: 'string',
      description: 'E.g., 2025-26',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
