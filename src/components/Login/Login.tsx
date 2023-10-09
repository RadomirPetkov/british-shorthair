import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../../firebase-config'
import { useDispatch, useSelector } from 'react-redux'
import { changeUser } from '../../redux/user'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { user } = useSelector((state: any) => state.user)
    const dispatch = useDispatch()

    const login = async () => {
        const user = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        if (user) {
            dispatch(changeUser(user))
            console.log(user)
        }
    }
    return (
        <div >
            <h1>Login</h1>
            <div>
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    type='text'
                    className='m-2 p-2 text-black'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input
                    type='password'
                    className='m-2 p-2 text-black'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button
                onClick={login}
                className='bg-slate-400 text-black p-4 m-3 w-24 rounded-2xl'>
                Login
            </button>
            {user && <span>logged in</span>}
        </div>
    )
}
