import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
  user: { uid: string; email: string | null } | undefined
}

const initialState: UserState = {
  user: undefined
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload
        ? { uid: action.payload.uid, email: action.payload.email }
        : undefined
    }
  }
})

export const { changeUser } = userSlice.actions

export default userSlice.reducer
