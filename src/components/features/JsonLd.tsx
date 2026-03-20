import { Helmet } from 'react-helmet-async'

export const LocalBusinessJsonLd = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SilverGlow British Shorthair',
    url: 'https://silverglowbshcats.com',
    logo: 'https://silverglowbshcats.com/logo-dark.png',
    sameAs: [
      'https://www.facebook.com/SilverglowBritishShorthair',
      'https://www.instagram.com/silverglow.bsh',
      'https://www.tiktok.com/@silverglowbshcats'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+359887022592',
      contactType: 'customer service',
      availableLanguage: ['English', 'Bulgarian']
    }
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SilverGlow British Shorthair',
    url: 'https://silverglowbshcats.com',
    inLanguage: ['en', 'bg'],
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://silverglowbshcats.com/?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'SilverGlow British Shorthair',
    description:
      'Reputable cattery of British Shorthair and Longhair Silver and Gold cats and kittens. Raised at home, well socialized, registered with pedigree, fully vaccinated.',
    url: 'https://silverglowbshcats.com',
    logo: 'https://silverglowbshcats.com/logo-dark.png',
    image: 'https://silverglowbshcats.com/logo-dark.png',
    telephone: '+359887022592',
    email: 'silverglowcats@outlook.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tryavna',
      addressCountry: 'BG'
    },
    sameAs: [
      'https://www.facebook.com/SilverglowBritishShorthair',
      'https://www.instagram.com/silverglow.bsh',
      'https://www.tiktok.com/@silverglowbshcats'
    ],
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
      ],
      opens: '09:00',
      closes: '21:00'
    }
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}
