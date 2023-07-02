import { Link } from 'react-router-dom'
import { Comment } from './Comment'

export const Feedback = () => {
    return (
        <div>
            <button className='bg-gray-100 text-black p-3 mt-2 rounded-xl'>
                <Link to="/feedback/comment">
                    Leave a feedback
                </Link>
            </button>
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}
