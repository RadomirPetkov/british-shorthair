import { useState } from 'react'
import { Accordion } from './Accordion'
import { useTranslation } from 'react-i18next'

export const FAQ = () => {
    const { t } = useTranslation()
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
    return (
        <div className='m-5 rounded-xl text-xl flex flex-col gap-5' onClick={() => setActive(!active)}>
            <h2 className='text-3xl'>{t('faq')}</h2>
            {data.map(data => {
                return <Accordion data={data} key={data.title} />
            })}
            <p>***</p>
            <p className='py-5 border-t-2'>{t('faq-final')}</p>
        </div>
    )
}
