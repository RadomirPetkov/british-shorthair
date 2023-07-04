import ReactStars from 'react-rating-stars-component'

export const Comment = (props: any) => {
    const { commentData } = props
    const { message, ownerName, petName, rating } = commentData
    return (
        <div className="mx-3  my-10 shadow-lg shadow-black border-white border-y-2 rounded-3xl bg-silver max-w-3xl sm:m-auto sm:my-10">
            <div className='flex flex-col m-auto items-center gap-3'>
                <h1 className="m-auto border-blue-300 h4-3 w-fit items-center text-xl">Overall raiting: </h1>
                <ReactStars value={rating} size={30} />
            </div>
            <p className="m-auto border-b-2 border-blue-300 p-3 w-fit text-xl">Owner name: {ownerName} </p>
            <p className="m-auto border-b-2 border-blue-300 p-3 w-fit text-xl">Pet name: {petName}</p>
            <p className="p-5">{message}</p>
        </div>
    )
}
