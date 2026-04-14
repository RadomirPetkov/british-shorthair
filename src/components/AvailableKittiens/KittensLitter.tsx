import { useNavigate } from 'react-router-dom'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { db, storage } from '../../firebase-config'
import { useEffect, useState } from 'react'
import ReactModal from 'react-modal'
import { Modal } from '../features/Modal'
import { useTranslation } from 'react-i18next'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { useSelector } from 'react-redux'

type KittensLitterProps = {
    parent1: string,
    parent2: string,
    parentNames: string[],
    dob: string,
    id: string,
    available: boolean
}

export const KittensLitter = ({ parent1, parent2, parentNames, available, id }: KittensLitterProps) => {
    const { user } = useSelector((state: any) => state.user)
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [firstImage, setFirstImage] = useState('')
    const [secondImage, setSecondImage] = useState('')
    const [modalImage, setModalImage] = useState('')
    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isAvailable, setIsAvailable] = useState(available)
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
    const handleClick = (e) => {
        setModalImage(e.target.src)
        setIsOpen(true)
    }

    const deleteKittensLitter = async () => {
        await deleteDoc(doc(db, 'KittensLitter', id))
        alert('Successfull update')
    }

    const toggleAvailable = async () => {
        const newValue = !isAvailable
        await updateDoc(doc(db, 'KittensLitter', id), { available: newValue })
        setIsAvailable(newValue)
    }

    return (
        <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/40 backdrop-blur-sm">

            {/* Status badge */}
            <div className="absolute top-4 left-4 z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg ${isAvailable ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}`}>
                    {isAvailable ? 'Available' : 'Coming Soon'}
                </span>
            </div>

            {/* Admin controls */}
            {user && (
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                    <button
                        className={`px-3 py-1 rounded-full text-xs font-bold tracking-wide transition-colors ${isAvailable ? 'bg-amber-500/80 hover:bg-amber-500 text-white' : 'bg-emerald-500/80 hover:bg-emerald-500 text-white'}`}
                        onClick={toggleAvailable}
                        title="Toggle availability"
                    >
                        {isAvailable ? 'Set Coming Soon' : 'Set Available'}
                    </button>
                    <button
                        className="w-8 h-8 bg-red-500/80 hover:bg-red-500 text-white rounded-full text-sm font-bold transition-colors"
                        onClick={() => setDeleteDialogIsOpen(!deleteDialogIsOpen)}
                    >✕</button>
                    {deleteDialogIsOpen && (
                        <div className="absolute right-0 mt-2 bg-gray-800 border border-white/10 p-3 rounded-xl text-white text-sm w-44 shadow-xl">
                            <p className="mb-2">Delete this litter?</p>
                            <div className="flex gap-2">
                                <button className="flex-1 bg-red-500 hover:bg-red-600 py-1 rounded-lg transition-colors" onClick={deleteKittensLitter}>Yes</button>
                                <button className="flex-1 bg-white/10 hover:bg-white/20 py-1 rounded-lg transition-colors" onClick={() => setDeleteDialogIsOpen(false)}>No</button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Parents section */}
            <div className="flex">
                <div className="w-1/2 relative group cursor-pointer overflow-hidden" onClick={handleClick}>
                    {firstImage
                        ? <img src={firstImage} alt={`${parentNames[0]} - SilverGlow British Shorthair`} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                        : <div className="w-full h-56 bg-white/5 animate-pulse" />
                    }
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                        <p className="text-white/50 text-xs uppercase tracking-wider">{t('sir')}</p>
                        <p className="text-white text-sm font-medium">{parentNames[0]}</p>
                    </div>
                </div>

                <div className="w-px bg-white/10" />

                <div className="w-1/2 relative group cursor-pointer overflow-hidden" onClick={handleClick}>
                    {secondImage
                        ? <img src={secondImage} alt={`${parentNames[1]} - SilverGlow British Shorthair`} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
                        : <div className="w-full h-56 bg-white/5 animate-pulse" />
                    }
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-0 right-0 text-center">
                        <p className="text-white/50 text-xs uppercase tracking-wider">{t('dam')}</p>
                        <p className="text-white text-sm font-medium">{parentNames[1]}</p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="p-4">
                <button
                    className={`w-full py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${isAvailable ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 cursor-pointer' : 'bg-white/5 text-white/30 border border-white/10 cursor-default'}`}
                    onClick={() => { if (isAvailable) { navigate(`/kittens/${id}`) } }}
                >
                    {isAvailable ? t('see-kittens-button') : t('coming-soon-button')}
                </button>
            </div>

            <ReactModal
                isOpen={isOpen}
                contentLabel="Parent photo"
                contentElement={() => <Modal pic={modalImage} setOpen={setIsOpen} />}
                shouldCloseOnEsc={true}
                closeTimeoutMS={500}
            />
        </div>
    )
}
