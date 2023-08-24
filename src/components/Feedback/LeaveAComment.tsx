import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ReactStars from 'react-rating-stars-component'
import { IoPawOutline, IoPawSharp } from 'react-icons/io5'

export const LeaveAComment = () => {
    const { t } = useTranslation()
    const [ownerName, setOwnerName] = useState('')
    const [petName, setPetName] = useState('')
    const [message, setMessage] = useState('')
    const [isNameFilled, setIsNameFilled] = useState(true)
    const [stars, setStars] = useState(5)
    const navigate = useNavigate()
    const handleClick = async (e) => {
        e.preventDefault()
        if (ownerName === '') {
            setIsNameFilled(false)
        } else {
            await setDoc(doc(db, 'Feedback', uuidv4()), {
                ownerName,
                petName,
                message,
                rating: stars
            })
            navigate('/feedback')
        }
    }
    const handleNameChange = (e) => {
        setOwnerName(e.target.value)
    }

    return <section className="rounded-xl h-screen w-screen text-black">
        <div className="m-auto px-4 py-16 sm:px-6 lg:px-8 md:w-1/3">
            <div className="rounded-lg bg-slate-400 p-8 shadow-lg lg:col-span-3 lg:p-12">
                <form action="" className="space-y-4">
                    <div>
                        <h5 className='pb-0 mb-0 text-xl'>{t('overall-rating')}:</h5>
                        <div className='m-auto py-3 flex flex-col items-center'>
                            <ReactStars
                                count={5}
                                value={stars}
                                size={24}
                                onChange={(newValue) => setStars(newValue)}
                                emptyIcon={IoPawOutline}
                                filledIcon={IoPawSharp}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="sr-only" htmlFor="name">{t('owner-name')}</label>
                        <input
                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                            placeholder="Owner name"
                            type="text"
                            id="name"
                            value={ownerName}
                            onChange={handleNameChange}
                        />
                        {!isNameFilled && <p className='text-red-600'>{t('field-required')}</p>}
                    </div>
                    <div>
                        <div>
                            <label className="sr-only" htmlFor="cat-name">{t('pet-name')}</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Pet name"
                                type="text"
                                id="cat-name"
                                value={petName}
                                onChange={(e) => setPetName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="sr-only" htmlFor="message">{t('message')}</label>
                        <textarea
                            className="w-full rounded-lg border-gray-200 p-5 h-48 text-sm"
                            placeholder="Message"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                    </div>

                    <div className="mt-4">
                        <button
                            className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                            onClick={handleClick}
                        >
                            {t('send-feedback')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
}
