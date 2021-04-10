import {Book} from "../types/book";
import {useEffect, useState} from "react";
import {apiBookGetAll} from "../api/book";

interface UseBooksGetAll {
  data: Book.Data[],
  loading: boolean
}

export const useBooksGetAll = (): UseBooksGetAll => {
  const [data, setData] = useState<Book.Data[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    apiBookGetAll()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  },[])

  return {
    data,
    loading
  }
}
