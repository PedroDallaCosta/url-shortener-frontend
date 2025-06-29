import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePassword } from "@/hooks/usePassword";
import { Loader2Icon } from "lucide-react";
import { useParams } from 'react-router-dom';

export default function Unlock() {
  const { shortId } = useParams()
  const { register, handleSubmit, loading } = usePassword(shortId)

  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 sm:w-2/7 h-[85px] flex flex-col items-center">
        <h1 className="text-white font-bold mt-12 text-2xl text-center">This link is is protected</h1>
        <h2 className="text-white font-light mt-3 text-xs text-center">This link is password-protected. Please enter the correct password to access its content.</h2>

        <form className="w-full mt-6 relative" onSubmit={handleSubmit}>
          <Input
            className="pr-12 text-white text-center"
            placeholder="Password"
            {...register('password', { required: "The password is required" })}
          />

          <Button
            className="bg-[#21acf2] hover:bg-[#2163f2] hover:cursor-pointer absolute right-0 top-0 rounded-l-xs"
          >
            {
              loading ?
                <>
                  <Loader2Icon className="animate-spin" />
                  Loading
                </>
                : "Unlock"
            }
          </Button>
        </form>
      </div>
    </div>
  )
}