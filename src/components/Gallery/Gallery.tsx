import { useEffect, useState } from 'react'
import { storage } from '../../firebase-config'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { SEO } from '../features/SEO'
import { seoData } from '../../config/seoData'
import { useTranslation } from 'react-i18next'

const GalleryImage = ({ url }: { url: string }) => {
    const [loaded, setLoaded] = useState(false)

    return (
        <div className='relative aspect-square rounded-full overflow-hidden shadow-black shadow-md'>
            {!loaded && (
                <div className='absolute inset-0 bg-slate-600 animate-pulse' />
            )}
            <img
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                src={url}
                alt="SilverGlow British Shorthair cat"
                loading="lazy"
                onLoad={() => setLoaded(true)}
            />
        </div>
    )
}

export const Gallery = () => {
    const { i18n } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.gallery[currentLang]
    const [imageList, setImageList] = useState([])
    const [loading, setLoading] = useState(true)
    const imageListRef = ref(storage, 'main-gallery/')

    useEffect(() => {
        listAll(imageListRef).then((res) => {
            Promise.all(res.items.map((item) => getDownloadURL(item))).then((urls) => {
                setImageList(urls as any)
                setLoading(false)
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
            <h1 className='sr-only'>SilverGlow British Shorthair Photo Gallery</h1>
            <div className='grid grid-cols-3 grid-flow-row gap-5 justify-center w-3/4 m-auto py-5'>
                {loading
                    ? Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className='aspect-square rounded-full bg-slate-600 animate-pulse' />
                    ))
                    : imageList.map((url) => (
                        <GalleryImage key={url} url={url} />
                    ))
                }
            </div>
        </>
    )
}
