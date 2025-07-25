import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { toast } from "sonner"

export default function InputButton({ urlShort }) {
  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(urlShort);
    toast.success('Link copied to clipboard!')
  }

  return (
    <div className='w-full flex justify-between gap-2 items-center mt-5'>
      <Input disabled={true} value={urlShort} className="text-white font-semibold" />
      <Button type="submit" variant="outline" onClick={handleClickCopy} className="bg-[#2194F2] text-white border-none font-bold">COPY</Button>
    </div>
  )
}