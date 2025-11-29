import Head from 'next/head'
import { useRouter } from 'next/router'
import seoConfig from '../utils/seo.config'

const SEO = ({ title, description, image, canonical }) => {
  const router = useRouter()
  const siteUrl = seoConfig.siteUrl || process.env.NEXT_PUBLIC_SITE_URL || 'https://legnohaus.com.ar'

  const finalTitle = title || seoConfig.title
  const finalDescription = description || seoConfig.description
  const url = canonical || `${siteUrl}${router.asPath}`
  const imageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}${seoConfig.defaultImage}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": finalTitle,
    "url": url,
    "description": finalDescription,
    "image": imageUrl,
    "author": {
      "@type": "Person",
      "name": seoConfig.author || ''
    }
  }

  return (
    <Head>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Basic robots */}
      <meta name="robots" content="index, follow" />

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  )
}

export default SEO
