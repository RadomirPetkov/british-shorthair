import { collection, getDocs } from 'firebase/firestore'
import { AddNewKittensLitter } from './AddNewKittensLitter'
import { KittensLitter } from './KittensLitter'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useEffect, useState } from 'react'
import { db } from '../../firebase-config'

export const AvailableKittens = () => {
    const [firebaseDocsData, setFirebaseDocsData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const firebaseDocs = await getDocs(collection(db, 'KittensLitter'))
            firebaseDocs.forEach((doc) => {
                // @ts-ignore
                setFirebaseDocsData((oldData) => {
                    return [...oldData, doc].sort((a, b) => {
                        if (a.data().available < b.data().available) {
                            return 1
                        }
                        if (a.data().available > b.data().available) {
                            return -1
                        }
                        return 0
                    })
                })
            })
        }
        fetchData()
    }, [])

    const { user } = useSelector((state: any) => state.user)
    return (
        <div className=''>
            {firebaseDocsData.map((doc: any) => {
                const data = doc
                    .data()
                return (
                    <KittensLitter
                        key={doc.id}
                        id={doc.id}
                        dob={'none'}
                        parent1={data?.parentPic1}
                        parent2={data?.parentPic2}
                        parentNames={[`${data.parentName1}`, `${data.parentName2}`]}
                        available={data.available}
                    />
                )
            })}
            {user && <AddNewKittensLitter />}
        </div>
    )
}
