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
                setFirebaseDocsData((oldData:any) => [...oldData, doc])
            })
        }
        fetchData()
    }, [])

    const user = useSelector((state: any) => state.user)
    console.log(user)

    return (
        <div className=''>
            <KittensLitter dob={'13.04.2023'} parent1={'marvin'} parent2={'ainie'} parentNames={['World Champion Marvin Polaris', 'Champion SilverGlow Little Moonshadow (pet name: Ainie)']} />
            <KittensLitter dob={'29.03.2023'} parent1={'raffaello'} parent2={'candy'} parentNames={['Champion SilverGlow Ferrero Raffaello', 'Nicomedia Candy']} />
            <KittensLitter dob={'12.08.2023'} parent1={'aspen'} parent2={'bubie'} parentNames={['Aspen SilverGlow', 'Champion SilverGlow Hubba Bubba (pet name: Bubie)']} />
            <KittensLitter dob={'none'} parent1={'aspen'} parent2={'icie'} parentNames={['Aspen SilverGlow', 'SilverGlow Ice Ice Baby (pet name: Icie)']} />
            <KittensLitter dob={'none'} parent1={'raffaello'} parent2={'baicie'} parentNames={['Champion SilverGlow Ferrero Raffaello', 'Baicie SilverGlow']} />
            {/* {user && <AddNewKittensLitter/>} */}
            {firebaseDocsData.map((doc:any) => {
                const data = doc.data()
                return (
                    <KittensLitter key={doc.id} id={doc.id} dob={'none'} parent1={data?.parentPic1} parent2={data?.parentPic2} parentNames={[`${data.parentName1}`, `${data.parentName2}`]} />
                )
            })}
            <AddNewKittensLitter />
        </div>
    )
}
