import {Language} from "../types/language";
import {useEffect, useState} from "react";
import {apiLanguageGetAll} from "../api/language";

interface UseLanguageGetAll {
  data: Language.Data[],
  loading: boolean
}

export const useLanguageGetAll = (): UseLanguageGetAll => {
  const [data, setData] = useState<Language.Data[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    apiLanguageGetAll()
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  },[])

  return {
    data,
    loading
  }
}
