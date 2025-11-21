import gallery from './gallery'
import announcement from './announcement'
import news from './news'
import event from './event'
import faculty from './faculty'
import download from './download'
import leadership from './leadership'
import testimonial from './testimonial'
import achievement from './achievement'
import siteSettings from './siteSettings'


import pageImages from './pageImages'
import admissionPopup from './admissionPopup'
import faq from './faq'
import contactSubmission from './contactSubmission'
import admissionSubmission from './admissionSubmission'

export const schemaTypes = [
  // Content
  gallery,
  announcement,
  news,
  event,
  faculty,
  download,
  leadership,
  testimonial,
  achievement,
  faq, // NEW
  
  // Settings & Global
  siteSettings,
  pageImages, // NEW
  admissionPopup, // NEW
  
  // Form Submissions
  contactSubmission, // NEW
  admissionSubmission, // NEW
]
