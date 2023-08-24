import { Link } from 'react-router-dom'
import { Comment } from './Comment'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Feedback = () => {
    const [snaphots, setSnapshots] = useState([])
    const feedbackRef = collection(db, 'Feedback')
    const { t } = useTranslation()
    useEffect(() => {
        const getData = async () => {
            const data: any = await getDocs(feedbackRef)
            setSnapshots(data.docs.map((doc) => ({ ...doc.data() })))
        }
        getData()
    }, [])

    return (
        <div className='overflow-y-hidden'>
            <div className='w-screen'>
            </div>
            <button className='bg-gray-100 text-black p-3 mt-10 rounded-xl'>
                <Link to="/feedback/comment">
                    {t('leave-feedback')}
                </Link>
            </button>
            <div className='m-auto'>
                {snaphots.map((snapshot) => {
                    console.log(snapshot)
                    return <Comment commentData={snapshot} key={snapshot} />
                })}
            </div>
        </div>
    )
}
