import { buttonClassName } from '../features/styles'
import { useNavigate } from 'react-router-dom'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { storage } from '../../firebase-config'
import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { Modal } from '../features/Modal'
import { useTranslation } from 'react-i18next'

type KittensLitterProps = {
    parent1: string,
    parent2: string,
    parentNames: string[],
    dob: string,
    id: string,
    available: boolean
}

export const KittensLitter = ({ parent1, parent2, parentNames, dob, available, id }: KittensLitterProps) => {
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [firstImage, setFirstImage] = useState('')
    const [secondImage, setSecondImage] = useState('')
    const [modalImage, setModalImage] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const firstImageListRef = ref(storage, `parents/${parent1}`)
    const secondImageListRef = ref(storage, `parents/${parent2}`)
    ReactModal.setAppElement('#root')

    useEffect(() => {
        listAll(firstImageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setFirstImage((prev): any => [...prev, url])
                })
            })
        })
        listAll(secondImageListRef).then((res) => {
            res.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setSecondImage((prev): any => [...prev, url])
                })
            })
        })
    }, [])
    const color = available ? 'text-green-400' : 'text-red-400'
    const handleClick = (e) => {
        setModalImage(e.target.src)
        setIsOpen(true)
    }

    return (
        <div className=" w-5/6 m-auto p-2 pt-5 bg-gray-300 my-10 rounded-3xl h-auto text-black space-y-5 sm:w-1/2 shadow-lg shadow-black">
            <h3>{t('parents')}</h3>
            <div className='flex flex-row items-start justify-evenly'>
                <div className='w-1/2 flex flex-col gap-3 items-center'>
                    <img src={firstImage} alt="" className='w-28 h-28 rounded-full' onClick={handleClick} />
                    <p>{t('sir')}: {parentNames[0]}</p>
                </div>
                <div className='w-1/2 flex flex-col gap-3 items-center'>
                    <img src={secondImage} alt="" className='w-28 h-28 rounded-full' onClick={handleClick} />
                    <p>{t('dam')}: {parentNames[1]}</p>
                </div>

            </div>
            <button
                className={buttonClassName.concat(color)}
                onClick={() => { if (available) { navigate(`/kittens/${id}`) } }}>
                {available ? t('see-kittens-button') : t('coming-soon-button')}
            </button>
            <ReactModal
                isOpen={isOpen}
                contentLabel="Example Modal"
                contentElement={() => <Modal pic={modalImage} setOpen={setIsOpen}></Modal>}
                shouldCloseOnEsc={true}
                closeTimeoutMS={500}
            >
            </ReactModal>
        </div>
    )
}
