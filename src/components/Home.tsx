import { Link } from 'react-router-dom'
import { buttonClassName } from './features/styles'
import cert1 from '../pictures/cert1.jpg'
import cert2 from '../pictures/cert2.jpg'
import { useState } from 'react'
import { Modal } from './features/Modal'
import ReactModal from 'react-modal'
import { Messanger } from './features/Messanger'

export const Home = () => {
    const [cert1Open, setcert1Open] = useState(false)
    const [cert2Open, setcert2Open] = useState(false)
    ReactModal.setAppElement('#root')
    return (
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
                    <h1 className="absolute bottom-32 text-4xl m-auto left-0 right-0 font-bold text-slate-400">SilverGlow British Shorthairs</h1>
                </section>
                <section className="pb-10">
                    <h1 className="font-bold text-5xl py-3 pt-6"> Who we are?</h1>
                    <p className="p-10 py-5 w-5/6 m-auto">We are Ivan and Rositsa, and together, we are running SilverGlow British Shorthair cats. We started breeding BSH Silver Spotted and Classic Tabbies in England in 2014. With the time our breeding program has changed to Silver Tipped/Shaded cats and we started breeding in England and in Bulgaria. Each kitten is raised with care and diligence, and equality important, is well socialised. All our kittens and cats are indoors and live together with us at home</p>
                    <p className="p-10 py-5 w-5/6 m-auto">All our kittens leave us GCCF or WCF registered with pedigrees, fully vaccinated ( FeLV vaccinated ), (The kittens born in Bulgaria are Rabies vaccinated and with come with an EU passport ), microchipped, flea and worm treated, scratch post and litter trained, with a contract for sale.</p>
                    <div className='flex flex-col gap-10 my-10 md:flex-row'>
                        <img src={cert2} alt="" className='w-3/4 m-auto rounded-xl md:w-1/3' onClick={() => setcert2Open(true)!} />
                        <img src={cert1} alt="" className='w-3/4 m-auto rounded-xl md:w-1/3' onClick={() => setcert1Open(true)!} />
                    </div>
                    <div className='flex flex-col items-center gap-1'>
                        <Link to={'/about-the-breed'} className={buttonClassName} >About the breed</Link>
                        <Link to={'/FAQ'} className={buttonClassName} >FAQ</Link>
                    </div>
                </section>
            </div>
            <Messanger/>
        </div>
    )
}
