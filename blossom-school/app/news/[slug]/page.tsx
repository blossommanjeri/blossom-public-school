import { notFound } from 'next/navigation'
import { getNewsBySlug, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'

export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  const article = await getNewsBySlug(params.slug)

  if (!article) {
    notFound()
  }

  return (
    <article className="py-16 md:py-24" style={{ backgroundColor: 'var(--neutral-50)' }}>
      <div className="container-custom max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/news"
          className="inline-flex items-center gap-2 mb-8 text-sm font-semibold transition-colors"
          style={{ color: 'var(--pace-700)' }}
        >
          ← Back to News
        </Link>

        {/* Featured Image */}
        {article.featuredImage && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-8">
            <Image
              src={urlFor(article.featuredImage).width(1200).url()}
              alt={article.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Category & Date */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span 
            className="px-4 py-2 rounded-lg text-sm font-semibold"
            style={{ backgroundColor: 'var(--pace-700)', color: 'white' }}
          >
            {article.category}
          </span>
          <span className="text-sm" style={{ color: 'var(--neutral-600)' }}>
            {new Date(article.publishedAt).toLocaleDateString('en-US', { 
              month: 'long', 
              day: 'numeric', 
              year: 'numeric' 
            })}
          </span>
        </div>

        {/* Title */}
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-heading)', color: 'var(--pace-900)' }}
        >
          {article.title}
        </h1>

        {/* Excerpt */}
        <p className="text-lg md:text-xl mb-8" style={{ color: 'var(--neutral-700)' }}>
          {article.excerpt}
        </p>

        {/* Content - FIXED */}
        <div 
          className="prose prose-lg max-w-none news-content"
          style={{ color: 'var(--neutral-800)' }}
        >
          {article.content && Array.isArray(article.content) && article.content.length > 0 ? (
            <PortableText 
              value={article.content}
              components={{
                block: {
                  normal: ({children}) => <p className="mb-4 text-base leading-relaxed">{children}</p>,
                  h1: ({children}) => <h1 className="text-3xl font-bold mb-4 mt-8" style={{fontFamily: 'var(--font-heading)', color: 'var(--pace-900)'}}>{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-bold mb-3 mt-6" style={{fontFamily: 'var(--font-heading)', color: 'var(--pace-900)'}}>{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-bold mb-2 mt-4" style={{fontFamily: 'var(--font-heading)', color: 'var(--pace-900)'}}>{children}</h3>,
                },
                marks: {
                  strong: ({children}) => <strong className="font-bold">{children}</strong>,
                  em: ({children}) => <em className="italic">{children}</em>,
                  link: ({value, children}) => <a href={value.href} className="underline" style={{color: 'var(--pace-700)'}} target="_blank" rel="noopener noreferrer">{children}</a>,
                },
                list: {
                  bullet: ({children}) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
                  number: ({children}) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
                },
              }}
            />
          ) : (
            <p className="text-base leading-relaxed">{article.excerpt}</p>
          )}
        </div>

        {/* Back to News */}
        <div className="mt-12 pt-8 border-t" style={{ borderColor: 'var(--neutral-300)' }}>
          <Link 
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all"
            style={{ 
              backgroundColor: 'var(--pace-700)', 
              color: 'white',
              fontFamily: 'var(--font-heading)',
            }}
          >
            ← Back to All News
          </Link>
        </div>
      </div>
    </article>
  )
}
