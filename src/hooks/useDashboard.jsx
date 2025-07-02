import { useUserContext } from "@/context/userContext"
import { useEffect } from "react"
import { useState } from "react"
import { useShowErrors } from "./useShowErrors"
import { getLinksData } from "@/service/getLinksData"

export const useDashboard = () => {
  const [ links, setLinks ] = useState(null)
  const { user } = useUserContext()
  
  useEffect(() => {
    const fetchLinks = async() => {
      try { 
        const links = await getLinksData()
        setLinks(links)
      } catch(errors){
        useShowErrors(errors)
      }
    }

    fetchLinks()
  }, [user])

  return links
}