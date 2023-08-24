import { useState } from 'react'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const LeaveAComment = () => {
    const { t } = useTranslation()
    const [ownerName, setOwnerName] = useState('')
    const [petName, setPetName] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const handleClick = async (e) => {
        e.preventDefault()
        await setDoc(doc(db, 'Feedback', uuidv4()), {
            ownerName,
            petName,
            message
        })
        navigate('/feedback')
        console.log(ownerName, petName, message)
    }

    return <section className="bg-gray-300 rounded-xl h-screen w-screen text-black">
        <div className="m-auto px-4 py-16 sm:px-6 lg:px-8 md:w-1/3">
                <div className="rounded-lg bg-slate-400 p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" className="space-y-4">
                        <div>
                            <label className="sr-only" htmlFor="name">{t('owner-name')}</label>
                            <input
                                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                placeholder="Owner name"
                                type="text"
                                id="name"
                                value={ownerName}
                                onChange={(e) => setOwnerName(e.target.value)}
                            />
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
