import {AppState} from "./types";
import {AppAction} from "./AppAction";
import {App} from "../../types/app";
import {apiAuthLogin} from "../../api/auth";
import {User} from "../../types/user";
import {dispatch} from "jest-circus/build/state";
import {apiUserCreate} from "../../api/user";
import {browserHistory} from "../../browserHistory";

const appFetch = (): AppState.Action.Fetch => ({
  type: AppAction.Fetch
})

const appFetchSuccess = (payload: App.Token): AppState.Action.FetchSuccess => ({
  type: AppAction.FetchSuccess,
  payload
})

const appFetchError = (payload: string): AppState.Action.FetchError => ({
  type: AppAction.FetchError,
  payload
})

const appFetchRegisterSuccess = (payload: User.Data): AppState.Action.FetchRegisterSuccess => ({
  type: AppAction.FetchRegisterSuccess,
  payload
})

export const appActions: AppState.ActionThunk = {
  appLogin: params => async (dispatch) => {
    dispatch(appFetch())

    try {
      const tokenPair = await apiAuthLogin(params)
      dispatch(appFetchSuccess(tokenPair))
      browserHistory.push('/')
    }
    catch (err) {
      dispatch(appFetchError('Ошибка авторизации'))
    }
  },
  appRegister: params => async (dispatch) => {
    dispatch(appFetch())

    try {
      const user = await apiUserCreate(params)
      dispatch(appFetchRegisterSuccess(user))
    }
    catch (err) {
      dispatch(appFetchError('Ошибка регистрации'))
    }
  }
}
