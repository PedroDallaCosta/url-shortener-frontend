import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Loader2Icon } from "lucide-react"
import { useForm } from 'react-hook-form';

import Advance from "@/components/Home/Advance"
import { useState } from "react";
import { useShortUrl } from "@/hooks/useShortUrl";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const navigate = useNavigate()
  const { register, watch, control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: { expireTime: '' }
  })

  const selectedDate = watch('expireTime');
  const [loading, setLoading] = useState(false)

  const onSubmit = async(data) => {
    setLoading(true)
    const destinationUrl = await useShortUrl(data)
    if (destinationUrl) navigate(destinationUrl)

    setLoading(false)
  }

  function formatDate(date) {
    if (!date) return '';
    return date.toLocaleDateString();
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <Input
          className="mt-7 text-white"
          placeholder="Paste your link"
          {...register('url', { require: "The URL is required" })}
        />

        <Label htmlFor="advance-mode" className="text-white mt-12 font-medium">Advanced info</Label>
        <Advance register={register} control={control} selectedDate={formatDate(selectedDate)} />

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