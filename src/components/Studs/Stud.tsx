import { useEffect, useState } from 'react'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { storage } from '../../firebase-config'
type Props = {
    firebaseUrl: string,
    sir: string,
    dam: string,
    fullName: string,
}

export const Stud = (props:Props) => {
    const { fullName, sir, dam, firebaseUrl } = props
    const [imageList, setImageList] = useState([])
    const [mainImage, setMainImage] = useState<any>(imageList[0])
    const imageListRef = ref(storage, `/studs/${firebaseUrl}`)
    useEffect(() => {
        listAll(imageListRef).then((res) => {
            getDownloadURL(res.items[0]).then((resp) => {
                console.log(resp)
                setMainImage(resp)
            }
            )
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev): any => [...prev, url])
                })
            })
        })
    }, [])

    const handleClick = (e: any) => {
        setMainImage(e.target.src)
    }

    return (
        <div className="w-3/4 m-auto p-3 pt-5 bg-stud my-10 rounded-3xl h-auto space-y-5 sm:w-1/2 shadow-lg shadow-black">
            <h3 className="">{ fullName }</h3>
            <h3 className="">Dam: { dam }</h3>
            <h3 className="">Sir: { sir }</h3>
            <img src={mainImage} alt="" className='h-1/2 m-auto max-h-96 rounded-xl shadow-black shadow-md' />
            <div className=' w-full inline-flex items-center'>
                <img src={imageList[0]} alt="" className='h-1/2 w-1/6 m-auto rounded-full pointer-events-auto cursor-pointer shadow-black shadow-md' onClick={(e) => { handleClick(e) }} />
                <img src={imageList[1]} alt="" className='h-1/2 w-1/6 m-auto rounded-full pointer-events-auto cursor-pointer shadow-black shadow-md' onClick={(e) => { handleClick(e) }} />
                <img src={imageList[2]} alt="" className='h-1/2 w-1/6 m-auto rounded-full pointer-events-auto cursor-pointer shadow-black shadow-md' onClick={(e) => { handleClick(e) }} />
                <img src={imageList[3]} alt="" className='h-1/2 w-1/6 m-auto rounded-full pointer-events-auto cursor-pointer shadow-black shadow-md' onClick={(e) => { handleClick(e) }} />
            </div>
        </div>
    )
}
