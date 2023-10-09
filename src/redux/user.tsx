import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  user: Object | undefined
}

const initialState: UserState = {
  user: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<Object>) => {
      state.user = { ...action.payload }
    }
  }
})

export const { changeUser } = userSlice.actions

export default userSlice.reducer
