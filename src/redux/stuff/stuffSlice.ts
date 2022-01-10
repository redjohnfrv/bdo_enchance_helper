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

export const stuffSlice = createSlice({
  name: 'stuff',
  initialState,
  reducers: {
    getStuffState: (state, action) => {
      return {...action.payload}
    },
    removeStuffState: (state) => {
      state = {...initialState}
      return state
    }
  },
})

const {actions, reducer} = stuffSlice
export const {getStuffState, removeStuffState} = actions
export default reducer
