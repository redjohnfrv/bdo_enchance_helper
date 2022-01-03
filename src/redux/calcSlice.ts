import {createSlice} from '@reduxjs/toolkit'
import {DASH_STRING} from '../constants'

export type ChanceValueType = {
  value: string
}

const initialState: ChanceValueType = {
  value: DASH_STRING,
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
