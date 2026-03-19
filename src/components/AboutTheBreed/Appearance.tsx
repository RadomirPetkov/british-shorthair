import { useTranslation } from 'react-i18next'
import { SEO } from '../features/SEO'
import { seoData } from '../../config/seoData'

export const Appearance = ({ standalone = false }: { standalone?: boolean }) => {
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.appearance[currentLang]
    return (
        <div className=" m-auto h-full pb-10">
            {standalone && (
                <SEO
                    title={seo.title}
                    description={seo.description}
                    keywords={seo.keywords}
                    canonicalUrl="/appearance"
                    lang={currentLang}
                />
            )}
            <h1 className="m-10 p-2 text-5xl border-b-2 border-slate-400">{t('appearance')}</h1>
            <p className="leading-8 w-3/4 m-auto">{t('appearance-text')}</p>
        </div>
    )
}
