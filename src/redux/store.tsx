import { configureStore } from '@reduxjs/toolkit'
import languageReducer from './language'
import userReducer from './user'

export default configureStore({
    reducer: {
        language: languageReducer,
        user: userReducer
    }
})
