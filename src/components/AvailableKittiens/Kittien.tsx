import { useEffect, useState } from 'react'
import { ref, listAll, getDownloadURL, deleteObject } from 'firebase/storage'
import { db, storage } from '../../firebase-config'
import { useNavigate } from 'react-router-dom'
import ReactModal from 'react-modal'
import { Modal } from '../features/Modal'
import { useTranslation } from 'react-i18next'
import { deleteDoc, doc, updateDoc } from 'firebase/firestore'
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
    const [isEditing, setIsEditing] = useState(false)
    const [editName, setEditName] = useState(data.name)
    const [editGender, setEditGender] = useState(data.gender)
    const [editColor, setEditColor] = useState(data.color)
    const [editDob, setEditDob] = useState(data.dob)
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
    const handleImgClick = (url: string) => {
        setModalImage(url)
        setIsOpen(true)
    }

    const saveEdit = async () => {
        await updateDoc(doc(db, 'AvailableKittens', data.id), {
            name: editName,
            gender: editGender,
            color: editColor,
            dob: editDob
        })
        setIsEditing(false)
    }

    const deleteKitten = async () => {
        const folderRef = ref(storage, `available/${data.parentsId}/${data.name}`)
        const files = await listAll(folderRef)
        await Promise.all(files.items.map((fileRef) => deleteObject(fileRef)))
        await deleteDoc(doc(db, 'AvailableKittens', data.id))
        alert('Successfull update')
        setImageList([])
    }
    return (
        <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-xl shadow-black/30">

            {/* Images */}
            <div className={`grid ${imageList[1] ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {imageList[0] && (
                    <div className="relative group cursor-pointer aspect-square bg-black overflow-hidden" onClick={() => handleImgClick(imageList[0])}>
                        <img
                            src={imageList[0]}
                            alt={`${data.name} - ${data.color} British Shorthair kitten`}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                )}
                {imageList[1] && (
                    <div className="relative group cursor-pointer aspect-square bg-black overflow-hidden" onClick={() => handleImgClick(imageList[1])}>
                        <img
                            src={imageList[1]}
                            alt={`${data.name} - ${data.color} British Shorthair kitten`}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                )}
                {!imageList[0] && <div className="h-64 bg-white/5 animate-pulse" />}
            </div>

            {/* Info */}
            <div className="p-5 flex flex-col gap-4">
                {isEditing
                    ? (
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <label className="text-white/50 text-xs uppercase tracking-wider">Name</label>
                                <input className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-white/40" value={editName} onChange={(e) => setEditName(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-white/50 text-xs uppercase tracking-wider">Gender</label>
                                <input className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-white/40" value={editGender} onChange={(e) => setEditGender(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-white/50 text-xs uppercase tracking-wider">Color</label>
                                <input className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-white/40" value={editColor} onChange={(e) => setEditColor(e.target.value)} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-white/50 text-xs uppercase tracking-wider">{t('dob')}</label>
                                <input className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-white/40" value={editDob} onChange={(e) => setEditDob(e.target.value)} />
                            </div>
                            <div className="flex gap-2 mt-1">
                                <button className="flex-1 py-2 bg-emerald-500/80 hover:bg-emerald-500 text-white rounded-lg text-sm font-semibold transition-colors" onClick={saveEdit}>Save</button>
                                <button className="flex-1 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm transition-colors" onClick={() => setIsEditing(false)}>Cancel</button>
                            </div>
                        </div>
                    )
                    : (
                        <>
                            <h3 className="text-white text-lg font-semibold tracking-wide">{editName}</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-white/70 text-xs">{editGender}</span>
                                <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-white/70 text-xs">{editColor}</span>
                                {editDob && <span className="px-3 py-1 bg-white/10 border border-white/10 rounded-full text-white/70 text-xs">{t('dob')}: {editDob}</span>}
                            </div>
                            <button
                                className="w-full py-3 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all duration-300"
                                onClick={handleClick}
                            >
                                {t('available')}
                            </button>
                        </>
                    )
                }
            </div>

            {/* Admin controls */}
            {user && (
                <div className="absolute top-3 right-3 flex gap-2">
                    <button
                        className="w-8 h-8 bg-blue-500/80 hover:bg-blue-500 text-white rounded-full text-sm font-bold transition-colors"
                        onClick={() => setIsEditing(!isEditing)}
                        title="Edit kitten"
                    >✎</button>
                    <button
                        className="w-8 h-8 bg-red-500/80 hover:bg-red-500 text-white rounded-full text-sm font-bold transition-colors"
                        onClick={() => setDeleteDialogIsOpen(true)}
                    >✕</button>
                    {deleteDialogIsOpen && (
                        <div className="absolute right-0 top-10 bg-gray-800 border border-white/10 p-3 rounded-xl text-white text-sm w-44 shadow-xl z-10">
                            <p className="mb-2">Delete this kitten?</p>
                            <div className="flex gap-2">
                                <button className="flex-1 bg-red-500 hover:bg-red-600 py-1 rounded-lg transition-colors" onClick={deleteKitten}>Yes</button>
                                <button className="flex-1 bg-white/10 hover:bg-white/20 py-1 rounded-lg transition-colors" onClick={() => setDeleteDialogIsOpen(false)}>No</button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <ReactModal
                isOpen={isOpen}
                contentLabel="Kitten photo"
                contentElement={() => <Modal pic={modalImage} setOpen={setIsOpen} width="w-full" />}
                shouldCloseOnEsc={true}
                closeTimeoutMS={500}
            />
        </div>
    )
}
