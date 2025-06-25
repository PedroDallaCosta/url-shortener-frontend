import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader2Icon } from "lucide-react"
import { useForm } from "@/hooks/useForms"

import Advance from "@/components/Home/Advance"

export default function Form({ }) {
  const {
    setUrl,
    setPassword,
    expireTime,
    setExpireTime,
    loading,
    handleSubmit,
  } = useForm()

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full">
        <Input className="mt-7 text-white" placeholder="Paste your link" onChange={(e) => setUrl(e.target.value)} />
        <Label htmlFor="advance-mode" className="text-white mt-12 font-medium">Advanced info</Label>
        <Advance setPassword={setPassword} setExpireTime={setExpireTime} expireTime={expireTime} />

        <Button className="mt-3 bg-[#2194F2] outline-none hover:bg-[#2163f2] w-full py-3" variant="default" type="submit" disabled={loading} >
          {
            !loading ? 'Shorten'
              : <>
                <Loader2Icon className="animate-spin" />
                Please wait
              </>
          }
        </Button>
      </form>
    </>
  )
}