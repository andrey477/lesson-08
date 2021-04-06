import {Language} from "../types/language";
import {ApiService} from "../service/ApiService";

export const apiLanguageGetAll = async (): Promise<Language.Data[]> => {
  const { data } = await ApiService(true).get<Language.Data[]>('/languages')
  return data
}
