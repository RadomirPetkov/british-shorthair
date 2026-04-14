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

const PawIcon = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="30" cy="20" rx="10" ry="13" />
        <ellipse cx="70" cy="20" rx="10" ry="13" />
        <ellipse cx="15" cy="45" rx="8" ry="11" />
        <ellipse cx="85" cy="45" rx="8" ry="11" />
        <path d="M50 35 C25 35 15 55 18 72 C21 85 35 90 50 90 C65 90 79 85 82 72 C85 55 75 35 50 35Z" />
    </svg>
)

export const KittensLitter = ({ parent1, parent2, parentNames, available, id }: KittensLitterProps) => {
    const { user } = useSelector((state: any) => state.user)
    const { t } = useTranslation()
    const navigate = useNavigate()
    const [firstImage, setFirstImage] = useState<string>('')
    const [secondImage, setSecondImage] = useState<string>('')
    const [modalImage, setModalImage] = useState('')
    const [deleteDialogIsOpen, setDeleteDialogIsOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isAvailable, setIsAvailable] = useState(available)
    const firstImageListRef = ref(storage, `parents/${parent1}`)
    const secondImageListRef = ref(storage, `parents/${parent2}`)
    ReactModal.setAppElement('#root')

    useEffect(() => {
        listAll(firstImageListRef).then((res) => {
            if (res.items[0]) {
                getDownloadURL(res.items[0]).then((url) => setFirstImage(url))
            }
        })
        listAll(secondImageListRef).then((res) => {
            if (res.items[0]) {
                getDownloadURL(res.items[0]).then((url) => setSecondImage(url))
            }
        })
    }, [])

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
        <div className="relative bg-white/5 border border-white/10 rounded-2xl shadow-2xl shadow-black/40 backdrop-blur-sm">

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
                        <div className="absolute right-0 mt-10 bg-gray-800 border border-white/10 p-3 rounded-xl text-white text-sm w-44 shadow-xl z-20">
                            <p className="mb-2">Delete this litter?</p>
                            <div className="flex gap-2">
                                <button className="flex-1 bg-red-500 hover:bg-red-600 py-1 rounded-lg transition-colors" onClick={deleteKittensLitter}>Yes</button>
                                <button className="flex-1 bg-white/10 hover:bg-white/20 py-1 rounded-lg transition-colors" onClick={() => setDeleteDialogIsOpen(false)}>No</button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Family tree */}
            <div className="pt-8 px-6 pb-6">

                {/* Parents row */}
                <div className="flex justify-between items-start">

                    {/* Father */}
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-lg cursor-pointer hover:border-white/50 transition-all duration-300"
                            onClick={() => { if (firstImage) { setModalImage(firstImage); setIsOpen(true) } }}
                        >
                            {firstImage
                                ? <img src={firstImage} alt={`${parentNames[0]} - British Shorthair`} className="w-full h-full object-cover" />
                                : <div className="w-full h-full bg-white/5 animate-pulse" />
                            }
                        </div>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest">{t('sir')}</p>
                        <p className="text-white/80 text-xs font-medium text-center max-w-[120px] sm:max-w-[150px] leading-snug">{parentNames[0]}</p>
                    </div>

                    {/* Mother */}
                    <div className="flex flex-col items-center gap-2">
                        <div
                            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-white/20 shadow-lg cursor-pointer hover:border-white/50 transition-all duration-300"
                            onClick={() => { if (secondImage) { setModalImage(secondImage); setIsOpen(true) } }}
                        >
                            {secondImage
                                ? <img src={secondImage} alt={`${parentNames[1]} - British Shorthair`} className="w-full h-full object-cover" />
                                : <div className="w-full h-full bg-white/5 animate-pulse" />
                            }
                        </div>
                        <p className="text-white/40 text-[10px] uppercase tracking-widest">{t('dam')}</p>
                        <p className="text-white/80 text-xs font-medium text-center max-w-[120px] sm:max-w-[150px] leading-snug">{parentNames[1]}</p>
                    </div>
                </div>

                {/* Branch SVG — two curves converging at centre */}
                <div className="relative w-full h-16">
                    <svg
                        className="absolute inset-0 w-full h-full"
                        viewBox="0 0 400 64"
                        preserveAspectRatio="none"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Left branch */}
                        <path
                            d="M 60 0 C 60 48 200 48 200 64"
                            stroke="rgba(255,255,255,0.18)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                        {/* Right branch */}
                        <path
                            d="M 340 0 C 340 48 200 48 200 64"
                            stroke="rgba(255,255,255,0.18)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Merge node — paw icon */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 bg-[#1a1f2e] border border-white/15 rounded-full p-1.5 shadow-lg">
                        <PawIcon className="w-5 h-5 text-white/35" />
                    </div>
                </div>

                {/* Stem */}
                <div className="flex justify-center pt-4 pb-3">
                    <div className="w-px h-7 bg-white/15" />
                </div>

                {/* Status badge */}
                <div className="flex justify-center mb-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg ${isAvailable ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'}`}>
                        {isAvailable ? 'Available' : 'Coming Soon'}
                    </span>
                </div>

                {/* CTA */}
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
