import { FaPaw } from 'react-icons/fa6'
import { PiPawPrint } from 'react-icons/pi'

export const Comment = (props: any) => {
    const { commentData } = props
    const { message, ownerName, petName } = commentData
    return (
        <div className='relative overflow-hidden mx-3 my-10 shadow-lg shadow-black border-white border-y-2 rounded-3xl bg-silver max-w-3xl sm:m-auto sm:my-10'>
            <p className='m-auto border-b-2 border-blue-300 p-3 w-fit text-xl'>Owner name: {ownerName} </p>
            <p className='m-auto border-b-2 border-blue-300 p-3 w-fit text-xl'>Pet name: {petName}</p>
            <p className='p-5'>{message}</p>
            <div className='absolute -top-10 -left-96'>
                <FaPaw size={75} />
            </div>
            <div className='absolute -top-10 -right-96'>
                <PiPawPrint size={75} />
            </div>
            <div className='absolute top-10 -left-52'>
                <FaPaw size={75} />
            </div>
            <div className='absolute top-10 -right-52'>
                <PiPawPrint size={75} />
            </div>
        </div>
    )
}
