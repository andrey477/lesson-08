import {Book} from "../types/book";
import {ApiService} from "../service/ApiService";

export const apiBookGetAll = async (): Promise<Book.Data[]> => {
  const { data } = await ApiService(true).get<Book.Data[]>('/books')
  return data
}
