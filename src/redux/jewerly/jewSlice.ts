import {createSlice} from '@reduxjs/toolkit'
import {NULL} from '../../constants'
import {jewInputValues} from '../../dto/inputValuesObj'
import {InputValueType} from '../../dto/types'

export type EnhancedJewType = {
  chance: string
  rawProfit: string
  noPremProfit: string
  premProfit: string
  value: InputValueType
}

const initialState: EnhancedJewType = {
  chance: NULL,
  rawProfit: NULL,
  noPremProfit: NULL,
  premProfit: NULL,
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
