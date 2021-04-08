import {AppState} from "./types";
import {AppAction} from "./AppAction";
import {App} from "../../types/app";
import {apiAuthLogin, apiAuthLogout} from "../../api/auth";
import {User} from "../../types/user";
import {apiUserCreate} from "../../api/user";
import {browserHistory} from "../../browserHistory";
import {dispatch} from "jest-circus/build/state";

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

const appFetchLogout = (): AppState.Action.FetchLogout => ({
  type: AppAction.FetchLogout
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
  },
  appLogout: () => async (dispatch) => {
    try {
      await apiAuthLogout()
    }
    catch (err) {
      console.log(err)
    }
    finally {
      dispatch(appFetchLogout())
    }
  }
}
