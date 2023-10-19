import { useEffect, useState } from 'react'
import { ref, listAll, getDownloadURL, deleteObject } from 'firebase/storage'
import { db, storage } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import { buttonClassName } from '../features/styles'
import ReactModal from 'react-modal'
import { Modal } from '../features/Modal'
import { useTranslation } from 'react-i18next'
import { deleteDoc, doc } from 'firebase/firestore'
import { useSelector } from 'react-redux'

type KittenProps = {
    data: {
        name: string,
        dob: string,
        urlFolderName: string,
        gender: string,
        color: string,
        parentsId: string,
        id: string
    }
}

export const Kitten = (props: KittenProps) => {
    const { user } = useSelector((state: any) => state.user)
    const { t } = useTranslation()
    const { data } = props
    const navigate = useNavigate()
    const [imageList, setImageList] = useState([])
    const [modalImage, setModalImage] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false)
    ReactModal.setAppElement('#root')

    const imageListRef = ref(storage, `available/${data.parentsId}/${data.name}`)

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

    const deleteKitten = async () => {
        const picRef = ref(storage, `/available/${data.parentsId}/${data.name}/${data.parentsId}-${data.name}-1`)
        await deleteObject(picRef)
        await deleteDoc(doc(db, 'AvailableKittens', data.id))
        alert('Successfull update')
        setImageList([...imageList])
    }
    return (
        <div className='relative'>
            <div className='flex flex-col items-center py-10 h-full'>
                <h3 className=''>{data.name}</h3>
                <h3 className=''>{data.gender}</h3>
                <h3 className=''>{data.color}</h3>
                <h3 className=''>{t('dob')}: {data.dob}</h3>
                <h3 className=''><button className={buttonClassName.concat('text-green-400')} onClick={handleClick}>{t('available')}</button></h3>
                <div className='flex flex-col w-full h-auto gap-5 justify-center md:flex-row'>
                    <img src={imageList[0]} alt='' className='h-auto max-h-96 w-3/4 m-auto rounded-xl shadow-black shadow-md md:w-1/3 md:m-0' onClick={handleImgClick} />
                    {imageList[1] && <img src={imageList[1]} alt='' className='h-auto w-3/4 max-h-96 m-auto rounded-xl shadow-black shadow-md md:w-1/3 md:m-0' onClick={handleImgClick} />}
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
            {user &&
                <>
                    <button className='absolute top-5 right-5 bg-red-500 text-white p-3 rounded-full' onClick={() => setDeleteDialogIsOpen(true)}>X</button>
                    && {deleteDialogIsOpen &&
                        <div className='absolute top-20 right-10'>
                            <p>Are you sure you want to delete?</p>
                            <button className='p-2 bg-slate-400 m-2 rounded-xl' onClick={deleteKitten}>Yes</button>
                            <button className='p-2 bg-slate-400 m-2 rounded-xl' onClick={() => setDeleteDialogIsOpen(false)}>No</button>
                        </div>}
                </>}
        </div>
    )
}
