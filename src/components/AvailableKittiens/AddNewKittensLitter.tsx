import { collection, doc, setDoc } from 'firebase/firestore'
import { useState } from 'react'
import Select from 'react-select'
import { db } from '../../firebase-config'

export const AddNewKittensLitter = () => {
    const [parentName1, setParentName1] = useState('')
    const [parentName2, setParentName2] = useState('')
    const [parentPic1, setParentPic1] = useState<string | undefined>(undefined)
    const [parentPic2, setParentPic2] = useState<string | undefined>(undefined)
    const [available, setAvailable] = useState<boolean>(false)
    const submitData = async () => {
        const newKittensLitterDoc = doc(collection(db, 'KittensLitter'))
        try {
            await setDoc(newKittensLitterDoc, {
                parentName1,
                parentPic1,
                parentName2,
                parentPic2,
                available
            })
            alert('Successful upload')
        } catch (error) {
        console.log(error)
        }
    }
    const parentsOptions = [
        { value: 'ainie', label: 'Ainie' },
        { value: 'aspen', label: 'Aspen' },
        { value: 'baicie', label: 'Baicie' },
        { value: 'bubbie', label: 'Bubbie' },
        { value: 'candy', label: 'Candy' },
        { value: 'icie', label: 'Icie' },
        { value: 'marvin', label: 'Marvin' },
        { value: 'raffaello', label: 'Raffaello' }
    ]

    return (
        <div className=' w-5/6 m-auto p-2 pt-5 bg-gray-300 my-10 rounded-3xl h-auto text-black space-y-5 sm:w-1/2 shadow-lg shadow-black'>
            <h3>Parents</h3>
            <div className='flex flex-row items-start justify-evenly'>
                <div className='w-1/2 flex flex-col gap-3 items-center'>
                    <label htmlFor='parent1'>Parent 1</label>
                        <Select
                            options={parentsOptions}
                            onChange={(e) => setParentPic1(e.value)}
                        />
                    <div>
                        <label htmlFor='parentName2'>Name: </label>
                        <input type='text' className='p-1' id='parent1' value={parentName1} onChange={(e) => setParentName1(e.target.value)} />
                    </div>
                </div>
                <div className='w-1/2 flex flex-col gap-3 items-center'>
                    <label htmlFor='parentPic2'>Parent 2</label>
                    <Select
                            options={parentsOptions}
                            onChange={(e) => setParentPic2(e.value)}
                        />
                    <div>
                        <label htmlFor='parentName2'>Name: </label>
                        <input type='text' className='p-1' id='parentName2' value={parentName2} onChange={(e) => setParentName2(e.target.value)} />
                    </div>
                </div>
            </div>
            <label htmlFor="available">Available</label>
            <input type="checkbox" name="" id="available" className='m-2 w-5 h-5' checked={available} onChange={() => setAvailable(!available)} />
            <div>
                <button className='bg-gray-400 p-5 rounded-xl text-white text-xl' onClick={submitData}>Submit</button>
            </div>
        </div>
    )
}
