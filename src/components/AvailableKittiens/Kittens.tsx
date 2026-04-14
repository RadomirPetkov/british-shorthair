import { useState, useEffect } from 'react'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { Kitten } from './Kittien'
import { useParams } from 'react-router-dom'
import { storage, db } from '../../firebase-config'
import { ref, uploadBytes } from 'firebase/storage'
import { useSelector } from 'react-redux'

type KittenInfo = {
    name: string,
    dob: string,
    urlFolderName: string,
    gender: string,
    color: string,
    parentsId: string,
    id: string
}
export const Kittens = () => {
    const { user } = useSelector((state: any) => state.user)
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [color, setColor] = useState('')
    const [dob, setDob] = useState('')
    const [pic1, setPic1] = useState<File | null>(null)
    const [pic2, setPic2] = useState<File | null>(null)
    const { id } = useParams()
    const [snapshots, setSnapshots] = useState([])
    const [loading, setLoading] = useState(true)
    const storageRef1 = ref(storage, `/available/${id}/${name}/${id}-${name}-1`)
    const storageRef2 = ref(storage, `/available/${id}/${name}/${id}-${name}-2`)
    const feedbackRef = collection(db, 'AvailableKittens')
    const q = query(feedbackRef, where('parentsId', '==', id))

    useEffect(() => {
        let cancelled = false
        const getData = async () => {
            const data: any = await getDocs(q)
            if (!cancelled) {
                setSnapshots(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
                setLoading(false)
            }
        }
        getData()
        return () => { cancelled = true }
    }, [])

    const upload = async () => {
        const newKittenDoc = doc(collection(db, 'AvailableKittens'))
        try {
            await setDoc(newKittenDoc, {
                parentsId: id,
                name,
                gender,
                color,
                dob
            })
            if (pic1 !== null) {
                await uploadBytes(storageRef1, pic1)
            }
            if (pic2 !== null) {
                await uploadBytes(storageRef2, pic2)
            }
            alert('Successful upload')
        } catch (error) {
            console.log(pic1, pic2)
        }
    }
    return (
        <div className="flex-1 bg-stud py-12 px-4">
            {loading && (
                <div className="flex justify-center items-center h-48">
                    <div className="w-8 h-8 border-2 border-white/20 border-t-white/70 rounded-full animate-spin" />
                </div>
            )}
            {!loading && snapshots.length === 0 && (
                <p className="text-center text-white/40 text-sm tracking-widest uppercase mt-20">No kittens available now</p>
            )}
            {!loading && snapshots.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {snapshots.map((kittenInfo: KittenInfo, index) => (
                        <Kitten data={kittenInfo} key={index} />
                    ))}
                </div>
            )}
            {!loading && user &&
                <div className='bg-white/5 border border-white/10 rounded-2xl max-w-xl m-auto mt-10 text-white'>
                    <div className='w-full p-6 flex flex-col gap-4 items-start'>
                        <h2>Add new kitty</h2>
                        <div>
                            <label htmlFor="">Name: </label>
                            <input className='text-black p-1' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Gender: </label>
                            <input className='text-black p-1' type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Color: </label>
                            <input className='text-black p-1' type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">Date of birth: </label>
                            <input className='text-black p-1' type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="">pic 1:</label>
                            {/* @ts-ignore */}
                            <input className='text-black p-1' type="file" name="" id="" onChange={(e) => setPic1(e.target.files[0])} />
                        </div>
                        <div>
                            <label htmlFor="">pic 2:</label>
                            {/* @ts-ignore */}
                            <input className='text-black p-1' type="file" name="" id="" onChange={(e) => setPic2(e.target.files[0])} />
                        </div>
                    </div>
                    <button onClick={upload}>Upload</button>
                </div>
            }
        </div>
    )
}
