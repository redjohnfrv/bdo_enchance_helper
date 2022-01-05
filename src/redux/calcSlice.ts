import {createSlice} from '@reduxjs/toolkit'
import {EMPTY_STRING} from '../constants'

export type EnhancedType = {
  chance: string
  profit: string
}

const initialState: EnhancedType = {
  chance: EMPTY_STRING,
  profit: EMPTY_STRING,
}

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    getEnhance: (state, action) => {
      state = {
        ...state,
        chance: action.payload.chance,
        profit: action.payload.profit,
      }
      return state
    },
  },
})

const {actions, reducer} = calcSlice
export const {getEnhance} = actions
export default reducer
