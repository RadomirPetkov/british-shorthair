import { Link } from 'react-router-dom'
import { Comment } from './Comment'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { useEffect, useState } from 'react'
import img from '../../pictures/white.jpg'
import yellow from '../../pictures/yellow.jpg'
import ReactModal from 'react-modal'
import { Modal } from '../features/Modal'

export const Feedback = () => {
    ReactModal.setAppElement('#root')
    const [snaphots, setSnapshots] = useState([])
    const feedbackRef = collection(db, 'Feedback')
    const [isOpen, setIsOpen] = useState(false)
    const [modalImage, setModalImage] = useState('')
    useEffect(() => {
        const getData = async () => {
            const data: any = await getDocs(feedbackRef)
            setSnapshots(data.docs.map((doc) => ({ ...doc.data() })))
        }
        getData()
    }, [])
    const handleImgClick = (e) => {
        setModalImage(e.target.src)
        setIsOpen(true)
    }
    return (
        <div className='overflow-y-hidden'>
            <h2 className='m-3 text-xl'>SilverGlows Around The World</h2>
            <div className='w-screen'>
            <img src={img} alt="" className='w-11/12 m-auto rounded-xl' onClick={handleImgClick}/>
            <img src={yellow} alt="" className='w-11/12 m-auto rounded-xl my-5' onClick={handleImgClick}/>
            </div>
            <button className='bg-gray-100 text-black p-3 mt-10 rounded-xl'>
                <Link to="/feedback/comment">
                    Leave a feedback
                </Link>
            </button>
            <div className='m-auto'>
                {snaphots.map((snapshot) => {
                    console.log(snapshot)
                    return <Comment commentData={snapshot} key={snapshot} />
                })}
            </div>
            <ReactModal
                isOpen={isOpen}
                contentLabel="Example Modal"
                contentElement={() => <Modal pic={modalImage} setOpen={setIsOpen} width='w-auto'></Modal>}
                shouldCloseOnEsc={true}
                closeTimeoutMS={500}
            >
            </ReactModal>
        </div>
    )
}
