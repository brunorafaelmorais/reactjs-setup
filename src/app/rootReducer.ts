import { combineReducers } from '@reduxjs/toolkit'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

import user from '../features/auth/user/userSlice'

const rootReducer = combineReducers({ user })

export type RootState = ReturnType<typeof rootReducer>

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default rootReducer
