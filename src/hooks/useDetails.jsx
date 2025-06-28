import { getUrlDetails } from "@/service/getUrlDetails"
import { useEffect } from "react"
import { useState } from "react"
import { useShowErrors } from "./useShowErrors"

export const useDetails = (shortId) => {
  const [urlData, setUrlData] = useState(null)
  
  useEffect(() => {
    const fetchUrlDetails = async () => {
      try {
        const data = await getUrlDetails(shortId);
        setUrlData(data);
      } catch (errors) {
        useShowErrors(errors);
      }
    };

    fetchUrlDetails();
  }, [shortId])

  return urlData
}