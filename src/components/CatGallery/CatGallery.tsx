import { useEffect, useState } from 'react'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { storage } from '../../firebase-config'
import { FaPaw } from 'react-icons/fa6'
import { PiPawPrint } from 'react-icons/pi'
import { useTranslation } from 'react-i18next'
type Props = {
    firebaseUrl: string,
    sir: string,
    dam: string,
    fullName: string,
    petName?: string,
}

export const CatGallery = (props: Props) => {
    const { t } = useTranslation()
    const { fullName, sir, dam, firebaseUrl, petName } = props
    const [imageList, setImageList] = useState([])
    const [mainImage, setMainImage] = useState<any>(imageList[0])
    const imageListRef = ref(storage, `${firebaseUrl}`)
    useEffect(() => {
        listAll(imageListRef).then((res) => {
            Promise.all(res.items.map((item) => getDownloadURL(item))).then((urls) => {
                setImageList(urls as any)
                setMainImage(urls[0])
            })
        })
    }, [])

    const handleClick = (e: any) => {
        setMainImage(e.target.src)
    }

    return (
        <div className="relative overflow-hidden w-full m-auto mt-0 mb-14 p-3 pt-5 bg-stud my-10 rounded-3xl space-y-5 sm:w-1/2">
            <h3 className="">{fullName}</h3>
            {petName && <h3 className="">{t('pet-name-queens')}: {petName}</h3>}
            <h3 className="">{t('dam')}: {dam}</h3>
            <h3 className="">{t('sir')}: {sir}</h3>
            <div className='min-h-16 m-auto w-full rounded-xl'>
                {mainImage && <img src={mainImage} alt={`${fullName} - SilverGlow British Shorthair`} className='h-auto max-h-96 w-auto m-auto rounded-xl shadow-black shadow-md' loading="lazy" />}
            </div>
            <div className='w-full inline-flex items-center'>
                {[0, 1, 2, 3].map((i) => (
                    <div key={i} className='w-1/6 m-auto'>
                        {imageList[i] && <img src={imageList[i]} alt={`${fullName} photo ${i + 1}`} className='h-auto w-full rounded-full cursor-pointer shadow-black shadow-md' loading="lazy" onClick={(e) => { handleClick(e) }} />}
                    </div>
                ))}
            </div>
            <div className='absolute top-40 -left-96'>
                <FaPaw size={75} />
            </div>
            <div className='absolute top-56 -left-52'>
                <FaPaw size={75} />
            </div>
            <div className='absolute top-80 -left-96'>
                <FaPaw size={75} />
            </div>
            <div className='absolute top-96 -left-52'>
                <FaPaw size={75} />
            </div>
            <div className='absolute top-40 -right-96'>
                <PiPawPrint size={75} />
            </div>
            <div className='absolute top-56 -right-52'>
                <PiPawPrint size={75} />
            </div>
            <div className='absolute top-80 -right-96'>
                <PiPawPrint size={75} />
            </div>
            <div className='absolute top-96 -right-52'>
                <PiPawPrint size={75} />
            </div>
        </div>
    )
}
