import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'


export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Changed to false for write operations
  token: process.env.SANITY_API_TOKEN, // ADD THIS LINE
})

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export async function getGallery(category?: string) {
  const query = category && category !== 'all'
    ? `*[_type == "gallery" && category == $category] | order(date desc)`
    : `*[_type == "gallery"] | order(date desc)`
  
  return await client.fetch(query, { category })
}

export async function getAnnouncements(category?: string) {
  const query = category && category !== 'All'
    ? `*[_type == "announcement" && category == $category] | order(date desc)`
    : `*[_type == "announcement"] | order(date desc)`
  
  return await client.fetch(query, { category })
}

export async function getNews(category?: string) {
  const query = category && category !== 'All'
    ? `*[_type == "news" && category == $category] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        category,
        featuredImage,
        publishedAt,
        author
      }`
    : `*[_type == "news"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        category,
        featuredImage,
        publishedAt,
        author
      }`
  
  return await client.fetch(query, { category })
}


export async function getNewsBySlug(slug: string) {
  return await client.fetch(
    `*[_type == "news" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      excerpt,
      content,
      category,
      featuredImage,
      publishedAt,
      author
    }`,
    { slug }
  )
}

export async function getEvents(status?: string) {
  const query = status && status !== 'all'
    ? `*[_type == "event" && status == $status] | order(date desc)`
    : `*[_type == "event"] | order(date desc)`
  
  return await client.fetch(query, { status })
}

export async function getFaculty(department?: string) {
  const query = department && department !== 'All'
    ? `*[_type == "faculty" && department == $department] | order(order asc, name asc)`
    : `*[_type == "faculty"] | order(order asc, name asc)`
  
  return await client.fetch(query, { department })
}

export async function getDownloads(category?: string) {
  const query = category && category !== 'All'
    ? `*[_type == "download" && category == $category] | order(date desc) {
        _id,
        title,
        description,
        category,
        file {
          asset-> {
            url,
            originalFilename,
            extension,
            size
          }
        },
        date,
        fileSize,
        important
      }`
    : `*[_type == "download"] | order(date desc) {
        _id,
        title,
        description,
        category,
        file {
          asset-> {
            url,
            originalFilename,
            extension,
            size
          }
        },
        date,
        fileSize,
        important
      }`
  
  return await client.fetch(query, { category })
}


export async function getLeadership() {
  return await client.fetch(
    `*[_type == "leadership"] | order(_createdAt asc)`
  )
}

export async function getTestimonials(featured?: boolean) {
  const query = featured
    ? `*[_type == "testimonial" && featured == true] | order(date desc)`
    : `*[_type == "testimonial"] | order(date desc)`
  
  return await client.fetch(query)
}

export async function getSiteSettings() {
  return await client.fetch(`*[_type == "siteSettings"][0]`)
}


// PAGE IMAGES
export async function getPageImages() {
  return await client.fetch(`*[_type == "pageImages"][0]`)
}

// ADMISSION POPUP
export async function getAdmissionPopup() {
  return await client.fetch(`*[_type == "admissionPopup"][0]`)
}

// FAQs
export async function getFAQs(category?: string) {
  const query = category && category !== 'all'
    ? `*[_type == "faq" && category == $category] | order(order asc, _createdAt asc)`
    : `*[_type == "faq"] | order(order asc, _createdAt asc)`
  
  return await client.fetch(query, { category })
}

// FORM SUBMISSION HELPERS
export async function createContactSubmission(data: any) {
  return await client.create({
    _type: 'contactSubmission',
    ...data,
    submittedAt: new Date().toISOString(),
    status: 'new',
  })
}

export async function createAdmissionSubmission(data: any) {
  return await client.create({
    _type: 'admissionSubmission',
    ...data,
    submittedAt: new Date().toISOString(),
    status: 'new',
  })
}