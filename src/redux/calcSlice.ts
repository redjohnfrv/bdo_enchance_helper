import {createSlice} from '@reduxjs/toolkit'
import {EMPTY_STRING} from '../constants'

export type EnhancedType = {
  chance: string
  rawProfit: string
  noPremProfit: string
  premProfit: string
}

const initialState: EnhancedType = {
  chance: EMPTY_STRING,
  rawProfit: EMPTY_STRING,
  noPremProfit: EMPTY_STRING,
  premProfit: EMPTY_STRING,
}

export const calcSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    getEnhance: (state, action) => {
      state = {
        ...state,
        chance: action.payload.chance,
        rawProfit: action.payload.rawProfit,
        noPremProfit: action.payload.noPremProfit,
        premProfit: action.payload.premProfit,
      }
      return state
    },
  },
})

const {actions, reducer} = calcSlice
export const {getEnhance} = actions
export default reducer
