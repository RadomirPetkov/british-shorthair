import { AboutTheBreedView } from './AboutTheBreedView'
import { Appearance } from './Appearance'
import { Personality } from './Personality'
import { SEO } from '../features/SEO'
import { seoData } from '../../config/seoData'
import { useTranslation } from 'react-i18next'

export const AboutTheBreedMain = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language as 'en' | 'bg'
  const seo = seoData.aboutTheBreed[currentLang]

  return (
    <>
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalUrl='/about-the-breed'
      />
      <div>
        <AboutTheBreedView />
        <Appearance />
        <Personality />
      </div>
    </>
  )
}
