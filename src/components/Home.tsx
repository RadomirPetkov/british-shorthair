import { Link } from 'react-router-dom'
import icie from '../pictures/icie.jpeg'
import bubbie from '../pictures/bubbie.jpeg'
import raffaello from '../pictures/raffaello.jpeg'
import marcel from '../pictures/marcel.jpeg'
import { MainKittie } from './MainKittie'

export const Home = () => {
    return (
        <div className="h-screen">
            <section className=" flex-col w-screen h-4/5 bg-front-image  bg-no-repeat bg-fixed bg-cover bg-bottom ">
                <div className="bg-black w-screen h-full opacity-70 m-0 p-0 flex-col">
                    <h1 className="font-bold text-3xl py-3 pt-24">Welcome to our site</h1>
                    <h2 className="py-10 text-3xl mx-3 font-bold">SilverGlow British Shorthair</h2>
                    <h3 className="text-2xl w-1/2 m-auto">“A cat doesn’t care if you are smart or dumb, give him your heart and he will give you his.”</h3>
                    <p className='pt-10'>Abraham Lincoln</p>
                </div>
            </section>
            <section className="">
                <h1 className="font-bold text-5xl text-black py-3 pt-6"> Who we are?</h1>
                <p className="text-black p-10 w-5/6 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime, recusandae molestiae quo explicabo sunt dolores numquam illo, mollitia reprehenderit nobis eos ipsa ut a nihil error temporibus dicta velit nostrum excepturi iusto voluptatem dolor accusamus fugiat! Ratione alias ab, minus pariatur non nisi magnam vero reiciendis officia temporibus aspernatur blanditiis assumenda omnis cum, facilis deleniti et quam. Voluptatibus non quasi veniam recusandae fugit velit, consectetur dignissimos. Mollitia, unde nostrum. In fugiat deserunt ipsa inventore maxime, tempore, repellat numquam vitae perspiciatis, culpa maiores vel ut provident quam obcaecati excepturi? Officiis optio rerum laborum, dolorum aliquam nesciunt ullam repellendus nobis consectetur!</p>
                <button className="bg-black p-5 rounded-full w-48 hover:bg-blue-500 font-bold  shadow-white shadow-lg border-slate-400 border-4">
                    <Link to={'/about'}>
                        About us
                    </Link>
                </button>

                <h1 className="font-bold text-5xl text-black py-3 pt-6"> Why us?</h1>
                <p className="text-black p-10 w-5/6 m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis maxime, recusandae molestiae quo explicabo sunt dolores numquam illo, mollitia reprehenderit nobis eos ipsa ut a nihil error temporibus dicta velit nostrum excepturi iusto voluptatem dolor accusamus fugiat! Ratione alias ab, minus pariatur non nisi magnam vero reiciendis officia temporibus aspernatur blanditiis assumenda omnis cum, facilis deleniti et quam. Voluptatibus non quasi veniam recusandae fugit velit, consectetur dignissimos. Mollitia, unde nostrum. In fugiat deserunt ipsa inventore maxime, tempore, repellat numquam vitae perspiciatis, culpa maiores vel ut provident quam obcaecati excepturi? Officiis optio rerum laborum, dolorum aliquam nesciunt ullam repellendus nobis consectetur!</p>
                <button className="bg-black p-5 rounded-full w-48 hover:bg-blue-500 font-bold mb-10 shadow-white shadow-lg border-slate-400 border-4">
                    <Link to={'/gallery'}>
                        Gallery
                    </Link>
                </button>
            </section>
            <section className="bg-white">
                <h1 className="font-bold text-5xl text-black py-3 pt-6"> Our main kitties</h1>
                <p className="text-black p-10 w-5/6 m-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur reiciendis culpa ducimus aperiam impedit possimus!</p>
                <div className=''>
                    <div className='sm:inline-flex sm:space-x-20 mx-10'>
                        <MainKittie img={icie} age={3} title='Grand champion' character='Playful' name='Icie' />
                        <MainKittie img={raffaello} age={6} title='Grand champion' character='Lazy' name='Raffaello' />
                    </div>
                    <div className='sm:inline-flex sm:space-x-20 mx-10'>
                        <MainKittie img={bubbie} age={3} title='Grand champion' character='Crazy' name='Bubbie' />
                        <MainKittie img={marcel} age={10} title='Grand champion' character='Judging' name='Marcel' />
                    </div>
                </div>
            </section>
        </div>
    )
}
