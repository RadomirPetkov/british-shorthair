import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title: string
  description: string
  keywords?: string
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
  lang?: 'en' | 'bg'
}

export const SEO = ({
  title,
  description,
  keywords,
  ogImage = '/logo-dark.png',
  ogType = 'website',
  canonicalUrl,
  lang = 'en'
}: SEOProps) => {
  const siteName = 'SilverGlow British Shorthair'
  const fullTitle = `${title} | ${siteName}`
  const siteUrl = 'https://silverglowbshcats.com/'
  const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang === 'en' ? 'en_US' : 'bg_BG'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Additional SEO tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content={lang === 'en' ? 'English' : 'Bulgarian'} />
      <meta name="author" content="SilverGlow British Shorthair" />
    </Helmet>
  )
}
