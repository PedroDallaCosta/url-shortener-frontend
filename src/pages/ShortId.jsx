import { useParams, useNavigate } from 'react-router-dom'

export default function ShortId(){
  const { shortId } = useParams()
  const navigate = useNavigate()
  
  if (!shortId) navigate("/")
}