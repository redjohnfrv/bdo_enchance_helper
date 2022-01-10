import {combineReducers} from 'redux'
import jewSlice from './jewerly/jewSlice'
import stuffSlice from './stuff/stuffSlice'

const rootReducer = combineReducers({
  jew: jewSlice,
  stuff: stuffSlice,
})

export {rootReducer}
