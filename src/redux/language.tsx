import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LanguageState {
  language: string
}

const initialState: LanguageState = {
  language: 'EN'
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => {
      state.language = action.payload
    }
  }
})

export const { changeLang } = languageSlice.actions

export default languageSlice.reducer
