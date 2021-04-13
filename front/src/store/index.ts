import {applyMiddleware, compose, createStore, Reducer} from "redux";
import {rootReducer} from "./reducer";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from 'redux-persist'
// @ts-ignore
import {PersistConfig} from 'redux-persist/es/types';
// @ts-ignore
import storage from 'redux-persist/lib/storage'
import {RootState} from "./types";

const config: PersistConfig<RootState.State> = {
  key: 'catalog',
  storage
}
const composeEnhancer = window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?? compose;

const persistedReducer = persistReducer(config, rootReducer)

export const store = createStore(persistedReducer, composeEnhancer(
  applyMiddleware(thunk)
))

export const persistor = persistStore(store)
