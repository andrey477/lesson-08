import {Publisher} from "../types/Publisher";
import {useEffect, useState} from "react";
import {apiPublisherGetById} from "../api/publisher";

interface UsePublisherById {
  data: Publisher.Data | null;
  loading: boolean;
  setId: (id: number) => void;
}

export const usePublisherById = (defaultId?: number): UsePublisherById => {
  const [data, setData] = useState<Publisher.Data | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [id, setId] = useState<number | undefined>(defaultId)

  useEffect(() => {
    setLoading(true)
    setData(null)

    if (id === undefined || isNaN(id))
      return

    apiPublisherGetById(id)
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
