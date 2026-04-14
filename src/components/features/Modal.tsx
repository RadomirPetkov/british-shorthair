export const Modal = (props: { pic: any, setOpen?: Function, width?: string }) => {
    const { pic, setOpen, width = 'w-5/6' } = props

    return (
        <div className="bg-black bg-opacity-60 w-full h-full flex" onClick={() => setOpen!(false)}>
            <div className={`m-auto relative ${width}`}>
                {/* <button className="absolute right-0 bg-slate-300 text-red-400 w-7 h-7 rounded-xl" >X</button> */}
                <img src={pic} alt="" className="rounded-xl max-h-[90vh] w-auto max-w-full object-contain m-auto block" onClick={(e) => e.stopPropagation()}></img>
            </div>
        </div>
    )
}
