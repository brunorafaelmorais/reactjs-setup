import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
  authed: boolean
}

const initialState: AuthState = {
  authed: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthed: (state, action: PayloadAction<boolean>) => ({
      ...state,
      authed: action.payload
    })
  }
})

export const { setAuthed } = authSlice.actions

export default authSlice.reducer
