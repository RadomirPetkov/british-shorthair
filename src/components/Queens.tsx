import { CatGallery } from './CatGallery/CatGallery'
import { SEO } from './features/SEO'
import { seoData } from '../config/seoData'
import { useTranslation } from 'react-i18next'

export const Queens = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.queens[currentLang]

    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                canonicalUrl="/queens"
                lang={currentLang}
            />
                <div className='h-full bg-stud m-0 -mb-16 pb-8'>
                    <h1 className='sr-only'>Our Queens - SilverGlow British Shorthair Breeding Females</h1>
                    <CatGallery fullName='SilverGlow Ice Ice Baby' petName='Icie' firebaseUrl='/queens/Icie' sir='Ugo Polaris' dam='IGrCH Kamasaki Moonshadow' />
                    <CatGallery fullName='CH SilverGlow Little Moonshadow' petName='Ainie' firebaseUrl='/queens/Ainie' sir='IGrCH Jeraz Little Snowbear' dam='IGrCH Kamasaki Moonshadow' />
                    <CatGallery fullName='CH SilverGlow Hubba Bubba' petName='Bubie' firebaseUrl='/queens/Bubie' sir='CH Richard Von Burg Weissensee' dam='SilverGlow Ice Ice Baby' />
                    <CatGallery fullName='Nicomedia Candy' petName='Candy' firebaseUrl='/queens/Candy' sir='ICH Turquase Atris' dam='CH Alpari Felicita' />
                    <CatGallery fullName='Baicie SilverGlow' petName='Baicie' firebaseUrl='/queens/Baicie' sir='GECH Viva Vogue Ultramarine' dam='Nicomedia Candy' />
                </div>
        </>
    )
}
