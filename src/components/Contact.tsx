import { Link, useLocation } from 'react-router-dom'
import { buttonClassName } from './features/styles'
import { FaFacebook, FaInstagram, FaWhatsapp, FaViber, FaTiktok } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Contact = () => {
    const { t } = useTranslation()
    const { state } = useLocation()
    const { navPetName } = state || ''
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [petName, setPetName] = useState(navPetName || '')
    const [message, setMessage] = useState('')
    const sendMessage = async (e) => {
        e.preventDefault()
        await emailjs.send('service_u8udiym', 'template_xdomefn', { name, email, petName, message }, 'u6xIyRZQGgOWwNth8')
        setName('')
        setEmail('')
        setPetName('')
        setMessage('')
        alert('Your message was send!')
    }
    return (
        <div>
            {/* FORM */}
            <div className="bg-gray-400 w-5/6 m-auto p-10 pt-5 my-10 rounded-xl md:w-1/3">
                <form className="flex flex-col gap-3">
                    <h3 className="m-0 p-0 text-3xl">{t('contact-us')}</h3>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className='text-xl'>{t('form-name')}</label>
                        <input type="text" id="name" className="rounded-xl text-black p-1 pl-3" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className='text-xl'>{t('email')}</label>
                        <input type="email" id="email" className="rounded-xl text-black p-1 pl-3" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="pet-name" className='text-xl'>{t('pet-name')}</label>
                        <input type="text" id="pet-name" className="rounded-xl text-black p-1 pl-3" value={petName} onChange={(e) => setPetName(e.target.value)} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className='text-xl'>{t('message')}</label>
                        <textarea required id="message" className="rounded-xl h-32 p-2 text-black" value={message} onChange={(e) => setMessage(e.target.value)} />
                    </div>
                    <div>
                        <button className={buttonClassName} onClick={sendMessage}>{t('send')}</button>
                    </div>
                </form>
            </div>
            {/* CONTACTS */}
            <div className='m-auto flex flex-col gap-5 pb-10 justify-center w-3/4'>
                <div className='flex flex-col gap-3 m-auto'>
                    <h3 className=''>{t('contacts-text-facebook')}</h3>
                    <div className='flex flex-row items-center gap-3 m-auto'>
                        <Link to={'https://www.facebook.com/SilverglowBritishShorthair'}><FaFacebook size={52} className='bg-blue-300 rounded-full p-2' /></Link>
                        <Link className='cursor-pointer bg-blue-300 p-3 text-black rounded-full' to={'https://www.facebook.com/SilverglowBritishShorthair'}>SilverGlow British Shorthair</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 m-auto'>
                    <h3 className=''>{t('contacts-text-instagram')}</h3>
                    <div className='flex flex-row items-center gap-3'>
                        <Link to={'https://www.instagram.com/silverglow.bsh'}><FaInstagram size={52} className='bg-gradient-to-bl from-indigo-900 via-rose-400 to-violet-300 rounded-full p-1' /></Link>
                        <Link className='cursor-pointer bg-gradient-to-bl from-indigo-900 via-rose-400 to-violet-300 p-3 rounded-full' to={'https://www.instagram.com/silverglow.bsh'}>Silverglow.bsh</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 m-auto'>
                    <h3 className=''>{t('contacts-text-whatsapp')}</h3>
                    <div className='flex flex-row m-auto items-center gap-3'>
                        <FaWhatsapp size={52} color='green' className='bg-white p-2 rounded-full' />
                        <p className='bg-green-600 p-3 rounded-full'>+447473737026</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 m-auto'>
                    <h3 className=''>{t('contacts-text-viber')}</h3>
                    <div className='flex flex-row m-auto items-center gap-3'>
                        <FaViber size={52} color='purple' className='bg-white p-2 rounded-full' />
                        <p className='bg-purple-700 p-3 rounded-full'>+359887022592</p>
                    </div>
                </div>
                <div className='flex flex-col gap-3 m-auto'>
                    <h3 className=''>{t('contacts-text-tiktok')}</h3>
                    <div className='flex flex-row m-auto items-center gap-5'>
                        <FaTiktok size={52} color='purple' className='bg-white p-2 rounded-full' />
                        <Link className='cursor-pointer bg-black shadow-pink-400 shadow-md p-3 rounded-full' to={'https://www.tiktok.com/@silverglowbshcats'}>@silverglowbshcats</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-3 m-auto'>
                    <h3 className=''>{t('contacts-text-email')}</h3>
                    <div className='flex flex-row m-auto items-center gap-3'>
                        <MdEmail size={42} />
                        <p>silverglowcats@outlook.com</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
