export const Modal = (props: { pic: any, setOpen?: Function }) => {
    const { pic, setOpen } = props

    return (
        <div className="bg-black bg-opacity-60 w-full h-full flex" onClick={() => setOpen!(false)}>
            <div className="w-5/6 m-auto relative">
                <button className="absolute right-0 bg-slate-300 text-red-400 w-7 h-7 rounded-xl" >X</button>
                <img src={pic} alt="" className="rounded-xl w-full h-full" onClick={(e) => e.stopPropagation()}></img>
            </div>
        </div>
    )
}
