import {Action as ActionRedux} from 'redux'
import {AppAction} from "./AppAction";
import {App} from "../../types/app";
import {Thunk} from "../../types/base";
import {Auth} from "../../types/auth";


export declare namespace AppState {
  interface State {
    readonly loading: boolean;
    readonly accessToken: string;
    readonly refreshToken: string;
    readonly errorText: string;
  }

  namespace Action {
    type Fetch = ActionRedux<AppAction.Fetch> & {payload?: undefined}
    type FetchSuccess = ActionRedux<AppAction.FetchSuccess> & {payload: App.Token}
    type FetchError = ActionRedux<AppAction.FetchError> & {payload: string}
    type FetchLogout = ActionRedux<AppAction.FetchLogout> & {payload?: undefined}

    type All = Fetch | FetchSuccess | FetchError | FetchLogout
  }

  interface ActionThunk {
    appLogin: Thunk<Auth.Login.Params>;
    appLogout: Thunk;
  }
}
