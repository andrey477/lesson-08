import {Publisher} from "../types/Publisher";
import {ApiService} from "../service/ApiService";
import {Language} from "../types/language";

export const apiPublisherGetAll = async (params: Publisher.All.Params): Promise<Publisher.Data[]> => {
  const { data } = await ApiService(true).get<Publisher.Data[]>('/publishers', { params })
  return data
}

export const apiPublisherGetById = async (id: number): Promise<Publisher.Data> => {
  const { data } = await ApiService(true).get<Publisher.Data>(`/publishers/${id}`)
  return data
}

///publishers/:id


