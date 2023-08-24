import { useTranslation } from 'react-i18next'

export const Appearance = () => {
    const { t } = useTranslation()
    return (
        <div className=" m-auto h-full pb-10">
            <h1 className="m-10 p-2 text-5xl border-b-2 border-slate-400">{t('appearance')}</h1>
            <p className="leading-8 w-3/4 m-auto">{t('appearance-text')}</p>
        </div>
    )
}
