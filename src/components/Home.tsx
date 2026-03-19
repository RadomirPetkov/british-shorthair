import { Link } from 'react-router-dom'
import { buttonClassName } from './features/styles'
import cert1 from '../pictures/cert1.jpg'
import cert2 from '../pictures/cert2.jpg'
import { useState } from 'react'
import { Modal } from './features/Modal'
import ReactModal from 'react-modal'
import { Messanger } from './features/Messanger'
import { useTranslation } from 'react-i18next'
import { SEO } from './features/SEO'
import { seoData } from '../config/seoData'

export const Home = () => {
    const [cert1Open, setcert1Open] = useState(false)
    const [cert2Open, setcert2Open] = useState(false)
    ReactModal.setAppElement('#root')
    const { t, i18n } = useTranslation()
    const currentLang = i18n.language as 'en' | 'bg'
    const seo = seoData.home[currentLang]

    return (
        <>
            <SEO
                title={seo.title}
                description={seo.description}
                keywords={seo.keywords}
                canonicalUrl="/"
                lang={currentLang}
            />
            <div>
                <ReactModal
                    isOpen={cert1Open}
                    contentLabel="Example Modal"
                    contentElement={() => <Modal pic={cert1} setOpen={setcert1Open}></Modal>}
                    shouldCloseOnEsc={true}
                    closeTimeoutMS={500}
                >
                </ReactModal>
                <ReactModal
                    isOpen={cert2Open}
                    contentLabel="Example Modal"
                    contentElement={() => <Modal pic={cert2} setOpen={setcert2Open}></Modal>}
                    shouldCloseOnEsc={true}
                    closeTimeoutMS={500}
                >
                </ReactModal>
                <div className="">
                    <section className=" flex-col w-screen h-screen relative bg-front-image  bg-no-repeat bg-fixed bg-cover bg-center">
                        <div className="bg-black w-screen h-full opacity-50 m-0 p-0 flex-col">
                            {/* <h3 className="text-2xl w-1/2 m-auto">“A cat doesn’t care if you are smart or dumb, give him your heart and he will give you his.”</h3>
                        <p className='pt-10'>Abraham Lincoln</p> */}
                        </div>
                        <h1 className="absolute bottom-32 text-4xl m-auto left-0 right-0 font-bold text-slate-400 xl:text-6xl xl:bottom-56">{t('main-heading')}</h1>
                    </section>
                    <section className="pb-10">
                        <h2 className="font-bold text-5xl py-3 pt-6"> {t('who-we-are')}</h2>
                        <p className="p-10 py-5 w-5/6 m-auto">{t('who-we-are-first')}</p>
                        <p className="p-10 py-5 w-5/6 m-auto">{t('who-we-are-second')}</p>
                        <div className='flex flex-col gap-10 my-10 md:flex-row'>
                            <img src={cert2} alt="SilverGlow cattery official registration certificate" className='w-3/4 m-auto rounded-xl md:w-1/3' onClick={() => setcert2Open(true)!} />
                            <img src={cert1} alt="SilverGlow cattery pedigree registration certificate" className='w-3/4 m-auto rounded-xl md:w-1/3' onClick={() => setcert1Open(true)!} />
                        </div>
                        <div className='flex flex-col items-center gap-1'>
                            <Link to={'/about-the-breed'} className={buttonClassName} >{t('about-the-breed')}</Link>
                            <Link to={'/FAQ'} className={buttonClassName} >{t('faq')}</Link>
                        </div>
                    </section>
                </div>
                <Messanger />
            </div>
        </>
    )
}
