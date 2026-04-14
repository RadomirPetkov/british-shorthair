import { useEffect, useState } from 'react'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { storage } from '../firebase-config'
import { useTranslation } from 'react-i18next'

type Props = {
    firebaseUrl: string
    sir: string
    dam: string
    fullName: string
    petName?: string
}

export const StudCard = ({ firebaseUrl, sir, dam, fullName, petName }: Props) => {
    const { t } = useTranslation()
    const [imageList, setImageList] = useState<string[]>([])
    const [mainImage, setMainImage] = useState('')
    const imageListRef = ref(storage, firebaseUrl)

    useEffect(() => {
        listAll(imageListRef).then((res) => {
            Promise.all(res.items.map((item) => getDownloadURL(item))).then((urls) => {
                setImageList(urls)
                setMainImage(urls[0])
            })
        })
    }, [])

    return (
        <div className="flex flex-col gap-3">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/60 bg-gray-800 group">
                {mainImage
                    ? <img
                        src={mainImage}
                        alt={`${fullName} - SilverGlow British Shorthair stud`}
                        className="w-full h-auto max-h-[520px] object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                        loading="lazy"
                    />
                    : <div className="w-full h-96 animate-pulse bg-gray-700 rounded-2xl" />
                }
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6">
                    <h2 className="text-xl font-semibold text-white tracking-wide">{fullName}</h2>
                    {petName && <p className="text-gray-300 text-sm mt-0.5">{petName}</p>}
                </div>
            </div>

            <div className="flex gap-6 px-1 text-sm text-gray-400">
                <span><span className="text-gray-500 mr-1">{t('sir')}:</span>{sir}</span>
                <span><span className="text-gray-500 mr-1">{t('dam')}:</span>{dam}</span>
            </div>

            {imageList.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1">
                    {imageList.map((url, i) => (
                        <button
                            key={i}
                            onClick={() => setMainImage(url)}
                            className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${mainImage === url ? 'border-white opacity-100 scale-105' : 'border-transparent opacity-50 hover:opacity-80'}`}
                        >
                            <img src={url} alt={`${fullName} photo ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
