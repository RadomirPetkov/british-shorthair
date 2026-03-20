import { CatGallery } from './CatGallery/CatGallery'
import { SEO } from './features/SEO'
import { seoData } from '../config/seoData'
import { useTranslation } from 'react-i18next'

export const Studs = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.studs[currentLang]

    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                canonicalUrl="/studs"
                lang={currentLang}
            />
            <div className='bg-stud m-0 pb-8 -mb-16 h-full'>
                <h1 className='sr-only'>Our Studs - SilverGlow British Shorthair Breeding Males</h1>
                <CatGallery fullName='Aspen SilverGlow' firebaseUrl='/studs/Aspen' sir='GICH Viva Vogue Ultramarine ' dam='Nicomedia Candy' />
                <CatGallery fullName='CH SilverGlow Ferrero Raffaello' firebaseUrl='/studs/Raffaello' sir='CH Marozka Peridot' dam='IGrCH Kamasaki Moonshadow ' />
            </div>
        </>
    )
}
