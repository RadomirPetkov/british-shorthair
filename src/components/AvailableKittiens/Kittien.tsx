import { useEffect, useState } from 'react'
import { ref, listAll, getDownloadURL } from 'firebase/storage'
import { storage } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import { buttonClassName } from '../features/styles'
import ReactModal from 'react-modal'
import { Modal } from '../features/Modal'

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
    const [modalImage, setModalImage] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    ReactModal.setAppElement('#root')

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
    const handleImgClick = (e) => {
        setModalImage(e.target.src)
        setIsOpen(true)
    }
    return (
        <div className='flex flex-col items-center py-10 h-full'>
            <h3 className=''>{data.name}</h3>
            <h3 className=''>{data.gender}</h3>
            <h3 className=''>{data.color}</h3>
            <h3 className=''>Date of birth: {data.dob}</h3>
            <h3 className=''><button className={buttonClassName.concat('text-green-400')} onClick={handleClick}>Available</button></h3>
            <div className='flex flex-col w-full h-auto gap-5 justify-center md:flex-row'>
                <img src={imageList[0]} alt='' className='h-auto max-h-96 w-3/4 m-auto rounded-xl shadow-black shadow-md md:w-1/3 md:m-0' onClick={handleImgClick} />
                <img src={imageList[1]} alt='' className='h-auto w-3/4 max-h-96 m-auto rounded-xl shadow-black shadow-md md:w-1/3 md:m-0' onClick={handleImgClick} />
            </div>
            <ReactModal
                isOpen={isOpen}
                contentLabel="Example Modal"
                contentElement={() => <Modal pic={modalImage} setOpen={setIsOpen} width='w-full'></Modal>}
                shouldCloseOnEsc={true}
                closeTimeoutMS={500}
            >
            </ReactModal>
        </div>
    )
}
