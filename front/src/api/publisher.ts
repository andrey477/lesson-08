import {Publisher} from "../types/Publisher";
import {ApiService} from "../service/ApiService";

export const apiPublisherGetAll = async (params: Publisher.All.Params): Promise<Publisher.Data[]> => {
  const { data } = await ApiService(true).get<Publisher.Data[]>('/publishers', { params })
  return data
}
