import { useEffect, useState } from 'react'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import { buttonClassName } from '../features/styles'

type KittenProps = {
    data: {
        name: string,
        dob: string,
        urlFolderName: string,
        gender: string,
        color: string
    }
}

export const Kitten = (props: KittenProps) => {
    const { data } = props
    const navigate = useNavigate()
    const [imageList, setImageList] = useState([])
    const imageListRef = ref(storage, `available/${data.dob}/${data.urlFolderName}`)
    useEffect(() => {
        listAll(imageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageList((prev): any => [...prev, url])
                })
            })
        })
    }, [])

    const handleClick = () => {
        navigate('/contact', { replace: false, state: { navPetName: data.name } })
    }
    return (
        <div className='flex flex-col items-center py-10 h-full'>
            <h3 className=''>{data.name}</h3>
            <h3 className=''>{data.gender}</h3>
            <h3 className=''>{data.color}</h3>
            <h3 className=''>Date of birth: {data.dob}</h3>
            <h3 className=''><button className={buttonClassName.concat('text-green-400')} onClick={handleClick}>Available</button></h3>
            <div className='flex flex-col w-full h-auto gap-5'>
                <img src={imageList[0]} alt='' className='h-48 m-auto max-h-96 w-3/4 rounded-xl shadow-black shadow-md' />
                <img src={imageList[1]} alt='' className='h-auto w-3/4 m-auto max-h-96 rounded-xl shadow-black shadow-md' />
            </div>
        </div>
    )
}
