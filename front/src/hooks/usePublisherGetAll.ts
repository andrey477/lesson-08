import {Publisher} from "../types/Publisher";
import {useEffect, useState} from "react";
import {apiPublisherGetAll} from "../api/publisher";

interface UsePublisherGetAll {
  data: Publisher.Data[],
  setSearch: (search: string) => void,
  loading: boolean
}

export const usePublisherGetAll = (defaultSearch: string = ''): UsePublisherGetAll => {
  const [data, setData] = useState<Publisher.Data[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [search, setSearch] = useState<string>(defaultSearch)

  useEffect(() => {
    const params: Publisher.All.Params = {}

    if (search) {
      params.search = search
    }

    setLoading(true)
    apiPublisherGetAll(params)
      .then(setData)
      .catch(err => {
        setData([])
      })
      .finally(() => setLoading(false))

  }, [search])

  return {data, loading, setSearch}
}
