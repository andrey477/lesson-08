import {AppState} from "./types";
import {Reducer} from "redux";
import {AppAction} from "./AppAction";

const initState: AppState.State = {
  loading: false,
  accessToken: '',
  refreshToken: '',
  errorText: '',
}

export const appReducer: Reducer<AppState.State, AppState.Action.All> = (state= initState, action) => {
  switch (action.type) {
    case AppAction.Fetch:
      return {
        ...state,
        errorText: '',
        loading: true
      }
    case AppAction.FetchSuccess:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        loading: false
      }
    case AppAction.FetchError:
      return {
        ...state,
        loading: false,
        errorText: action.payload
      }
    case AppAction.FetchLogout:
      return {
        ...initState
      }
    default:
      return state
  }
}
