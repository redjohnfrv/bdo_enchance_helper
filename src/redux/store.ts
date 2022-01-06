import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {rootReducer} from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
}
const reducerPersist = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: reducerPersist,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
})

const storePersist = persistStore(store)
export {store, storePersist}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
