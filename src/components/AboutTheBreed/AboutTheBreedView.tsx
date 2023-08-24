import { useTranslation } from 'react-i18next'

export const AboutTheBreedView = () => {
    const { t } = useTranslation()
    return (
        <div className="w-3/4 m-auto h-full pb-10">
            <h1 className="m-10 p-2 text-5xl border-b-2 border-slate-400">{t('history')}</h1>
            <p className="leading-8"> {t('history-text')}</p>
        </div>
    )
}
