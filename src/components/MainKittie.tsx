type MainKittieProps = {
    name: string,
    age: number,
    title: string,
    character: string,
    img: any,
}

export const MainKittie = (props: MainKittieProps) => {
    const { name, age, title, img, character } = props
    return (
        <div className='inline-flex justify-evenly my-10 sm:justify-center bg-slate-300 flex-1 rounded-3xl py-10 items-center'>
            <div className=' w-1/4 place-self-start sm:w-2/5 '>
                <img src={img} alt={`${name} - British Shorthair cat`} className='rounded-full sm:ml-3 align-middle' />
            </div>
            <div className='inline-flex flex-col  w-1/2'>
                <p className='text-black'>Name: {name}</p>
                <p className='text-black'>Age: {age}</p>
                <p className='text-black'>Title: {title} </p>
                <p className='text-black'>Character: {character} </p>
            </div>
        </div>
    )
}
