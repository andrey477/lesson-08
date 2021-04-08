import {Auth} from "../types/auth";
import {App} from "../types/app";
import axios from "axios";
import {ApiService} from "../service/ApiService";

export const apiAuthLogin = async (params: Auth.Login.Params): Promise<App.Token> => {
  const { data } = await ApiService().post<App.Token>('/auth/login', params)
  return data
}

// export const apiAuthRefresh = async (params: Auth.Refresh.Params): Promise<App.Token> => {
//   const { data } = await ApiService().post<App.Token>('/auth/refresh', params)
//   return data
// }

export const apiAuthLogout = async (): Promise<void> => {
  await ApiService(true).post<void>('auth/logout')
}
