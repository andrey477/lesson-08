import {Language} from "../types/language";
import {useEffect, useState} from "react";
import {apiLanguageGetById} from "../api/language";

interface UseLanguageById {
  data: Language.Data | null;
  loading: boolean;
  setId: (id: number) => void;
}

export const useLanguageById = (defaultId?: number): UseLanguageById => {
  const [data, setData] = useState<Language.Data | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [id, setId] = useState<number | undefined>(defaultId)

  useEffect(() => {
    setLoading(true)
    setData(null)

    if (id === undefined || isNaN(id))
      return

    apiLanguageGetById(id)
      .then(setData)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  return {
    data: data,
    loading: loading,
    setId: setId
  }
}
