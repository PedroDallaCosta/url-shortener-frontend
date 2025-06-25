import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Form } from "@/components/pages/Home/Form"
import { Loader2Icon } from "lucide-react"
import Advance from "@/components/pages/Home/Advance"

export default function Home() {
  const {
    url,
    setUrl,
    password,
    setPassword,
    expireTime,
    setExpireTime,
    loading,
    setLoading,
    handleSubmit,
  } = Form()

  return (<div className="flex justify-center items-center">
    <div className="w-3/4 sm:w-2/7 h-[85px] flex flex-col items-center">
      <h1 className="text-white font-bold mt-12 text-2xl text-center">Shorten your links</h1>
      <h2 className="text-white font-light mt-3 text-xs text-center">Simplify your links with our fast, easy tool. Clean URLs perfect for sharing and tracking.</h2>

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
    </div>
  </div>)
}