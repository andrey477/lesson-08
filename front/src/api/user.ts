import {User} from "../types/user";
import axios from "axios";
import {ApiService} from "../service/ApiService";

export const apiUserCreate = async (params: User.Create.Param): Promise<User.Data> => {
  const { data } = await ApiService().post<User.Data>('/users/create', params)
  return data
}
