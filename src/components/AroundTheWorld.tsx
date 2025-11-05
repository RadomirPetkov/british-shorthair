// import { Map } from './AroundTheWorld/google-maps'
import { useTranslation } from 'react-i18next'
import yellow from '../pictures/yellow.jpg'
import { SEO } from './features/SEO'
import { seoData } from '../config/seoData'

export const AroundTheWorld = () => {
    const { i18n, t } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.aroundTheWorld[currentLang]
    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                canonicalUrl="/around-the-world"
                lang={currentLang}
            />
                <div className='w-11/12 m-auto mb-10 rounded-xl overflow-hidden'>
                    {/* <Map></Map> */}
                    <p className='my-10 text-xl'>{t('around-the-world-text')}</p>
                    <img src={yellow} alt="map" className='rounded-xl' />
                </div>
        </>
    )
}
