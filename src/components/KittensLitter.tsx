import { useEffect, useState } from 'react'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { storage } from '../firebase-config'

export const KittensLitter = () => {
    const [imageList, setImageList] = useState([])
    const [mainImage, setMainImage] = useState<any>(imageList[0])
    const [start, setStart] = useState<number>(0)
    const imageListRef = ref(storage, 'main-gallery/')
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

    const handleDecrease = () => {
        setStart((prev: number) => {
            if (prev <= 0) {
                return 0
            } else {
                return prev - 1
            }
        })
    }

    const handleIncrease = () => {
        setStart((prev: number) => {
            if (prev >= imageList.length - 5) {
                return imageList.length - 5
            } else {
                return prev + 1
            }
        })
    }

    return (
        <div className="w-3/4 m-auto p-2 pt-5 bg-white my-10 rounded-3xl h-auto text-black space-y-5 sm:w-1/2 shadow-lg shadow-black">
            <h3 className="">Date of birth: 23.06.2023</h3>
            <h3 className="">Name: Raffaello</h3>
            <h3 className="">Available: <span className='text-green-500'>Yes</span></h3>
            <img src={mainImage} alt="" className='h-1/2 m-auto max-h-96 rounded-xl shadow-black shadow-md' />
            <div className=' w-full inline-flex items-center'>
                <button onClick={handleDecrease}>{'<'}</button>
                <img src={imageList[start]} alt="" className='h-1/2 w-1/6 m-auto rounded-full pointer-events-auto cursor-pointer shadow-black shadow-md' onClick={(e) => { handleClick(e) }} />
                <img src={imageList[start + 1]} alt="" className='h-1/2 w-1/6 m-auto rounded-full pointer-events-auto cursor-pointer shadow-black shadow-md' onClick={(e) => { handleClick(e) }} />
                <img src={imageList[start + 2]} alt="" className='h-1/2 w-1/6 m-auto rounded-full pointer-events-auto cursor-pointer shadow-black shadow-md' onClick={(e) => { handleClick(e) }} />
                <img src={imageList[start + 3]} alt="" className='h-1/2 w-1/6 m-auto rounded-full pointer-events-auto cursor-pointer shadow-black shadow-md' onClick={(e) => { handleClick(e) }} />
                <img src={imageList[start + 4]} alt="" className='h-1/2 w-1/6 m-auto rounded-full pointer-events-auto cursor-pointer shadow-black shadow-md' onClick={(e) => { handleClick(e) }} />
                <button onClick={handleIncrease}>{'>'}</button>
            </div>
        </div>
    )
}
