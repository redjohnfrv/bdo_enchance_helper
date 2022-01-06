import {createSlice} from '@reduxjs/toolkit'
import {EMPTY_STRING} from '../../constants'

export type EnhancedJewType = {
  chance: string
  rawProfit: string
  noPremProfit: string
  premProfit: string
}

const initialState: EnhancedJewType = {
  chance: EMPTY_STRING,
  rawProfit: EMPTY_STRING,
  noPremProfit: EMPTY_STRING,
  premProfit: EMPTY_STRING,
}

export const jewSlice = createSlice({
  name: 'jew',
  initialState,
  reducers: {
    getJewState: (state, action) => {
      state = {
        ...state,
        chance: action.payload.chance,
        rawProfit: action.payload.rawProfit,
        noPremProfit: action.payload.noPremProfit,
        premProfit: action.payload.premProfit,
      }
      return state
    },
    removeJewState: (state) => {
      state = {...initialState}
      return state
    }
  },
})

const {actions, reducer} = jewSlice
export const {getJewState, removeJewState} = actions
export default reducer
