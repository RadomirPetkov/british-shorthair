import { Link } from 'react-router-dom'
import { Comment } from './Comment'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { SEO } from '../features/SEO'
import { seoData } from '../../config/seoData'

export const Feedback = () => {
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.feedback[currentLang]
    const [snaphots, setSnapshots] = useState([])
    const feedbackRef = collection(db, 'Feedback')

    useEffect(() => {
        const getData = async () => {
            const data: any = await getDocs(feedbackRef)
            setSnapshots(data.docs.map((doc) => ({ ...doc.data() })))
        }
        getData()
    }, [])

    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                canonicalUrl="/feedback"
                lang={currentLang}
            />
                <div className='overflow-hidden w-screen m-0'>
                    <div className='w-screen'>
                    </div>
                    <button className='bg-gray-100 text-black p-3 mt-10 rounded-xl'>
                        <Link to="/feedback/comment">
                            {t('leave-feedback')}
                        </Link>
                    </button>
                    <div className='m-auto'>
                        {snaphots.map((snapshot) => {
                            return <Comment commentData={snapshot} key={snapshot} />
                        })}
                    </div>
                </div>
        </>
    )
}
