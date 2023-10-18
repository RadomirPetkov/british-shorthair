import { useState, useEffect } from 'react'
import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { Kitten } from './Kittien'
import { useParams } from 'react-router-dom'
import { storage, db } from '../../firebase-config'
import { ref, uploadBytes } from 'firebase/storage'

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
    const [name, setName] = useState('')
    const [gender, setGender] = useState('')
    const [color, setColor] = useState('')
    const [dob, setDob] = useState('')
    const [pic1, setPic1] = useState<File | null>(null)
    const [pic2, setPic2] = useState<File | null>(null)
    const { id } = useParams()
    const [snapshots, setSnapshots] = useState([])
    const storageRef1 = ref(storage, `/available/${id}/${name}/${id}-${name}-1`)
    const storageRef2 = ref(storage, `/available/${id}/${name}/${id}-${name}-2`)
    const feedbackRef = collection(db, 'AvailableKittens')
    const q = query(feedbackRef, where('parentsId', '==', id))

    useEffect(() => {
        const getData = async () => {
            const data: any = await getDocs(q)
            setSnapshots(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getData()
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
        <div>
            {snapshots.length > 0 && snapshots.map((kittenInfo: KittenInfo, index) => {
                return <Kitten data={kittenInfo} key={index} />
            })}
            <div className='bg-slate-700 max-w-3xl m-auto'>
                <div className='w-1/2 m-auto p-5 rounded-xl flex flex-col gap-4 items-start'>
                    <h2>Add new kittie</h2>
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
                        <input className='text-black p-1' type="file" name="" id="" onChange={(e) => setPic1(e.target.files[0])} />
                    </div>
                    <div>
                        <label htmlFor="">pic 2:</label>
                        <input className='text-black p-1' type="file" name="" id="" onChange={(e) => setPic2(e.target.files[0])} />
                    </div>
                </div>
                <button onClick={upload}>Upload</button>
            </div>
        </div>
    )
}
