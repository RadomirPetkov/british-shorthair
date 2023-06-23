import { useEffect, useState } from 'react'
import { storage } from '../firebase-config'
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage'
import { v4 } from 'uuid'

export const GalleryAdmin = () => {
    const [imageList, setImageList] = useState([])
    const [imageUpload, setImageUpload] = useState<any>([])
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

    const addMore = () => {
        if (imageUpload == null) return
        const imageRef = ref(storage, `main-gallery/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then(() => {
            alert('Image uploaded')
        })
    }

    const deleteImage = (url: any): any => {
        console.log(url)
        const imageRef = ref(storage, url)
        deleteObject(imageRef)
        alert('Image deleted')
    }
    return (
        <>
            <div className='grid grid-cols-3 grid-flow-row gap-5 justify-center w-3/4 m-auto'>
                {imageList.map((url) => {
                    return (
                        <div key={url} className='relative'>
                            <button className='bg-red-700 border-white border-2 h-6 w-6 rounded-full absolute right-0 sm:right-10 sm:h-12 sm:w-12' key={url} onClick={ () => deleteImage(url)}>X</button>
                            <img className='h-24 sm:h-96 sm:w-96 rounded-full' src={url} alt="" key={url} />
                        </div>
                    )
                })}
            </div>
            <span>Add more pictures:</span>
            <input type='file' className='mt-16 ml-5' onChange={(e) => { e.target.files && setImageUpload(e?.target?.files[0]) }}></input >
            <button className='bg-black p-3 rounded-2xl' onClick={addMore}>Upload image</button>
        </>
    )
}
