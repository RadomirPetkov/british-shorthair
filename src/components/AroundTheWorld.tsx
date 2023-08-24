// import { Map } from './AroundTheWorld/google-maps'
import { useTranslation } from 'react-i18next'
import yellow from '../pictures/yellow.jpg'

export const AroundTheWorld = () => {
    const { t } = useTranslation()
    return (
        <div className='w-11/12 m-auto mb-10 rounded-xl overflow-hidden'>
            {/* <Map></Map> */}
            <p className='my-10 text-xl'>{t('around-the-world-text')}</p>
            <img src={yellow} alt="map" className='rounded-xl' />
        </div>
    )
}
