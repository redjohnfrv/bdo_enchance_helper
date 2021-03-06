import {createSlice} from '@reduxjs/toolkit'
import {NULL} from '../../constants'
import {commonInputValues} from '../../dto/inputValuesObj'
import {EnhancedType} from '../../dto/types'

const initialState: EnhancedType = {
  chance: NULL,
  rawProfit: NULL,
  noPremProfit: NULL,
  premProfit: NULL,
  value: commonInputValues,
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
