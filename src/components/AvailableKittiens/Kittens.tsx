import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase-config'
import { Kitten } from './Kittien'
import { useParams } from 'react-router-dom'

type KittenInfo = {
    name: string,
    dob: string,
    urlFolderName: string,
    gender: string,
    color: string
}
export const Kittens = () => {
    const { dob } = useParams()
    const [snapshots, setSnapshots] = useState([])
    const feedbackRef = collection(db, 'AvailableKittens')
    const q = query(feedbackRef, where('dob', '==', dob))

    useEffect(() => {
        const getData = async () => {
            const data: any = await getDocs(q)
            setSnapshots(data.docs.map((doc) => ({ ...doc.data() })))
        }
        getData()
    }, [])
    return (
        <div>
            {snapshots.length > 0 && snapshots.map((kittenInfo: KittenInfo, index) => {
                return <Kitten data={kittenInfo} key={index} />
            })}
        </div>
    )
}
