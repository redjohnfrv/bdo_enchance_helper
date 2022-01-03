import {createSlice} from '@reduxjs/toolkit'
import {EMPTY_STRING} from '../constants'

export type ChanceValueType = {
  value: string
}

const initialState: ChanceValueType = {
  value: EMPTY_STRING,
}

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    getChance: (state, action) => {
      state.value = action.payload
    },
  },
})

const {actions, reducer} = calcSlice
export const {getChance} = actions
export default reducer
