import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div className="h-screen">
            <section className=" flex-col w-screen h-full bg-front-image  bg-no-repeat bg-fixed bg-cover bg-center">
                <div className="bg-black w-screen h-full opacity-60 m-0 p-0 flex-col">
                    <h1 className="absolute bottom-24 text-3xl m-auto left-0 right-0 font-bold text-white">SilverGlow British Shorthair</h1>
                    {/* <h3 className="text-2xl w-1/2 m-auto">“A cat doesn’t care if you are smart or dumb, give him your heart and he will give you his.”</h3>
                    <p className='pt-10'>Abraham Lincoln</p> */}
                </div>
            </section>
            <section className="pb-10">
                <h1 className="font-bold text-5xl py-3 pt-6"> Who we are?</h1>
                <p className="p-10 w-5/6 m-auto">We are Ivan and Rositsa, and together, we are running SilverGlow British Shorthair cats. We started breeding BSH Silver Spotted and Classic Tabbies in England in 2014. With the time our breeding program has changed to Silver Tipped/Shaded cats and we started breeding in England and in Bulgaria. Each kitten is raised with care and diligence, and equality important, is well socialised. All our kittens and cats are indoors and live together with us at home</p>
                <button className="bg-black p-5 rounded-full w-48 hover:bg-blue-500 font-bold  shadow-white shadow-md border-slate-400 border-4">
                    <Link to={'/about'}>
                        About us
                    </Link>
                </button>
            </section>
        </div>
    )
}
