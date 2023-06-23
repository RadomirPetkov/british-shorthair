import { useEffect, useState } from 'react'
import { storage } from '../firebase-config'
import { ref, listAll, getDownloadURL } from 'firebase/storage'

export const Gallery = () => {
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, 'main-gallery/')
    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev): any => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <>
            <div className='grid grid-cols-3 grid-flow-row gap-5 justify-center w-3/4 m-auto'>
                {imageList.map((url) => {
                    return (
                        <div key={url} className='relative'>
                            <img className='h-24 sm:h-96 sm:w-96 rounded-full' src={url} alt="" key={url} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}
