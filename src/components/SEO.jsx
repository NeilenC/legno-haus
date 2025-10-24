import Head from 'next/head'
import { useRouter } from 'next/router'

const SEO = ({ title, description, image, canonical }) => {
  const router = useRouter()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://legno-haus.example'
  const url = canonical || `${siteUrl}${router.asPath}`
  const imageUrl = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : `${siteUrl}/logo.png`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "url": url,
    "description": description,
    "image": imageUrl,
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Basic robots */}
      <meta name="robots" content="index, follow" />

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </Head>
  )
}

export default SEO
