import {combineReducers, Reducer} from "redux";
import {RootState} from "./types";
import {appReducer} from "./app/reducer";
import {bookReducer} from "./book/reducer";

export const rootReducer: Reducer<RootState.State> = combineReducers({
  app: appReducer,
  book: bookReducer
})
