import { useState } from 'react'
import { Accordion } from './Accordion'
import { useTranslation } from 'react-i18next'
import { SEO } from '../features/SEO'
import { seoData } from '../../config/seoData'
import { Helmet } from 'react-helmet-async'

export const FAQ = () => {
    const { i18n, t } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.faq[currentLang]
    const [active, setActive] = useState(false)
    const data = [{
        title: t('question-1'),
        text: t('answer-1')
    },
    {
        title: t('question-2'),
        text: t('answer-2')
    },
    {
        title: t('question-3'),
        text: t('answer-3')
    },
    {
        title: t('question-4'),
        text: t('answer-4')
    },
    {
        title: t('question-5'),
        text: t('answer-5')
    }
    ]

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.map((item) => ({
            '@type': 'Question',
            name: item.title,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.text
            }
        }))
    }

    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                canonicalUrl="/faq"
                lang={currentLang}
            />
            <Helmet>
                <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
            </Helmet>
                <div className='m-5 rounded-xl text-xl flex flex-col gap-5' onClick={() => setActive(!active)}>
                    <h2 className='text-3xl'>{t('faq')}</h2>
                    {data.map(data => {
                        return <Accordion data={data} key={data.title} />
                    })}
                    <p>***</p>
                    <p className='py-5 border-t-2'>{t('faq-final')}</p>
                </div>
        </>
    )
}
