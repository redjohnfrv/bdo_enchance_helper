import {combineReducers} from 'redux'
import jewSlice from './jewerly/jewSlice'

const rootReducer = combineReducers({
  jew: jewSlice
})

export {rootReducer}
