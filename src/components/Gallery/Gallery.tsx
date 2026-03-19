import { useEffect, useState } from 'react'
import { storage } from '../../firebase-config'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { SEO } from '../features/SEO'
import { seoData } from '../../config/seoData'
import { useTranslation } from 'react-i18next'

export const Gallery = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.gallery[currentLang]
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, 'main-gallery/')
    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev): any => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                canonicalUrl="/gallery"
                lang={currentLang}
            />
            <div className='grid grid-cols-3 grid-flow-row gap-5 justify-center w-3/4 m-auto'>
                {imageList.map((url) => {
                    return (
                        <div key={url} className='relative'>
                            <img className='h-24 sm:h-96 sm:w-96 rounded-full shadow-black shadow-md' src={url} alt="" key={url} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
