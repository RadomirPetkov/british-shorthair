import { Link } from 'react-router-dom'

export const Home = () => {
    const linkClassName = 'hover:bg-baseBackground p-3 rounded-full'

    return (
        <div className="h-screen">
            <section className=" flex-col w-screen h-full bg-front-image  bg-no-repeat bg-fixed bg-cover bg-center">
                <div className="bg-black w-screen h-full opacity-0 m-0 p-0 flex-col">
                    {/* <h3 className="text-2xl w-1/2 m-auto">“A cat doesn’t care if you are smart or dumb, give him your heart and he will give you his.”</h3>
                    <p className='pt-10'>Abraham Lincoln</p> */}
                </div>
                <h1 className="absolute bottom-32 text-4xl m-auto left-0 right-0 font-bold text-zinc-900">SilverGlow British Shorthair</h1>
            </section>
            <section className="pb-10">
                <h1 className="font-bold text-5xl py-3 pt-6"> Who we are?</h1>
                <p className="p-10 w-5/6 m-auto">We are Ivan and Rositsa, and together, we are running SilverGlow British Shorthair cats. We started breeding BSH Silver Spotted and Classic Tabbies in England in 2014. With the time our breeding program has changed to Silver Tipped/Shaded cats and we started breeding in England and in Bulgaria. Each kitten is raised with care and diligence, and equality important, is well socialised. All our kittens and cats are indoors and live together with us at home</p>
                <button className="bg-black p-5 rounded-full w-52 hover:bg-blue-500 font-bold  shadow-silver shadow-md border-slate-400 border-4 m-2">
                    <Link to={'/about'} className={linkClassName} >About us</Link>
                </button>
                <button className=" bg-black p-5 text-left rounded-full w-52 hover:bg-blue-500 font-bold  shadow-silver shadow-md border-slate-400 border-4 m-2">
                    <Link to={'/about-the-breed'} className={linkClassName} >About the breed</Link>
                </button>
                <button className="bg-black p-5 rounded-full w-52 hover:bg-blue-500 font-bold  shadow-silver shadow-md border-slate-400 border-4 m-2">
                    <Link to={'/appearance'} className={linkClassName} >Appearance</Link>
                </button>
                <button className="bg-black p-5 rounded-full w-52 hover:bg-blue-500 font-bold  shadow-silver shadow-md border-slate-400 border-4 m-2">
                    <Link to={'/personality'} className={linkClassName} >Personality</Link>
                </button>
                <button className="bg-black p-5 rounded-full w-52 hover:bg-blue-500 font-bold  shadow-silver shadow-md border-slate-400 border-4 m-2">
                    <Link to={'/FAQ'} className={linkClassName} >FAQ</Link>
                </button>
            </section>
        </div>
    )
}
