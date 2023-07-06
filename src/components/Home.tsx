import { Link } from 'react-router-dom'
import { buttonClassName } from './styles'

export const Home = () => {
    // const linkClassName = 'hover:bg-baseBackground p-3 rounded-full '

    return (
        <div className="h-screen">
            <section className=" flex-col w-screen h-full bg-front-image  bg-no-repeat bg-fixed bg-cover bg-center">
                <div className="bg-black w-screen h-full opacity-50 m-0 p-0 flex-col">
                    {/* <h3 className="text-2xl w-1/2 m-auto">“A cat doesn’t care if you are smart or dumb, give him your heart and he will give you his.”</h3>
                    <p className='pt-10'>Abraham Lincoln</p> */}
                </div>
                <h1 className="absolute bottom-32 text-4xl m-auto left-0 right-0 font-bold text-slate-400">SilverGlow British Shorthair</h1>
            </section>
            <section className="pb-10">
                <h1 className="font-bold text-5xl py-3 pt-6"> Who we are?</h1>
                <p className="p-10 w-5/6 m-auto">We are Ivan and Rositsa, and together, we are running SilverGlow British Shorthair cats. We started breeding BSH Silver Spotted and Classic Tabbies in England in 2014. With the time our breeding program has changed to Silver Tipped/Shaded cats and we started breeding in England and in Bulgaria. Each kitten is raised with care and diligence, and equality important, is well socialised. All our kittens and cats are indoors and live together with us at home</p>
                <div className='flex flex-col items-center gap-1'>
                    <Link to={'/about'} className={buttonClassName} >About us</Link>
                    <Link to={'/about-the-breed'} className={buttonClassName} >About the breed</Link>
                    <Link to={'/FAQ'} className={buttonClassName} >FAQ</Link>
                </div>
            </section>
        </div>
    )
}
