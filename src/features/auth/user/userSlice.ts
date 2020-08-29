import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  authed: boolean
}

const initialState: UserState = {
  authed: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthed(state, action: PayloadAction<boolean>) {
      state.authed = action.payload
    }
  }
})

export const { setAuthed } = userSlice.actions

export default userSlice.reducer
