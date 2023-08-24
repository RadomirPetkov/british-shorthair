import { useTranslation } from 'react-i18next'
import { FaPaw } from 'react-icons/fa6'
import { IoPawOutline, IoPawSharp } from 'react-icons/io5'
import { PiPawPrint } from 'react-icons/pi'
import ReactStars from 'react-rating-stars-component'

export const Comment = (props: any) => {
    const { commentData } = props
    const { message, ownerName, petName, rating } = commentData
    const { t } = useTranslation()
    return (
        <div className='relative overflow-hidden mx-3 my-10 shadow-lg shadow-black border-white border-y-2 rounded-3xl bg-silver max-w-3xl sm:m-auto sm:my-10 2xl: xl:overflow-visible'>
            <div className='flex flex-col m-auto items-center gap-3'>
                <h1 className="m-auto border-blue-300 h4-3 w-fit items-center text-xl">{t('overall-rating')}: </h1>
                <ReactStars
                    value={rating}
                    size={30}
                    edit={false}
                    emptyIcon={IoPawOutline}
                    filledIcon={IoPawSharp}
                />
            </div>
            {ownerName && <p className='m-auto border-b-2 border-blue-300 p-3 w-fit text-xl'>{t('owner-name')}: {ownerName} </p>}
            {petName && <p className='m-auto border-b-2 border-blue-300 p-3 w-fit text-xl'>{t('pet-name')}: {petName}</p>}
            {message && <p className='p-5'>{message}</p>}
            <div className='absolute -top-10 -left-96'>
                <FaPaw size={75} />
            </div>
            <div className='absolute -top-10 -right-96'>
                <PiPawPrint size={75} />
            </div>
            <div className='absolute top-10 -left-52'>
                <FaPaw size={75} />
            </div>
            <div className='absolute top-10 -right-52'>
                <PiPawPrint size={75} />
            </div>
        </div>
    )
}
