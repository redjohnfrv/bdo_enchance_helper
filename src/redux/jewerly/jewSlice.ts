import {createSlice} from '@reduxjs/toolkit'
import {EMPTY_STRING} from '../../constants'
import {InputValueType} from '../../dto/types'
import {jewInputValues} from '../../dto/inputValuesObj'

export type EnhancedJewType = {
  chance: string
  rawProfit: string
  noPremProfit: string
  premProfit: string
  value: InputValueType
}

const initialState: EnhancedJewType = {
  chance: EMPTY_STRING,
  rawProfit: EMPTY_STRING,
  noPremProfit: EMPTY_STRING,
  premProfit: EMPTY_STRING,
  value: jewInputValues,
}

export const jewSlice = createSlice({
  name: 'jew',
  initialState,
  reducers: {
    getJewState: (state, action) => {
      return {...action.payload}
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
