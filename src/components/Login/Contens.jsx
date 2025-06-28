import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom"
import { Loader2Icon } from "lucide-react"

export default function Content({ children, forgotPassword, textButton, handleSubmit,register, loading }) {
  const [ showPassword, setShowPassword ] = useState(false)

  return (
    <Card className="w-full max-w-sm mt-5 border-[#3B4A54] bg-transparent shadow-none">
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="text-white"
                {...register('email', { required: 'The email is required ' })}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center h-5">
                <Label htmlFor="password" className="text-white">Password</Label>

                {forgotPassword && (
                  <Link to="/password_reset" className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-[#ffffff3c]">Forgot your password?</Link>
                )}
              </div>

              <div className="relative">
                <Input
                  className="pr-10 text-white"
                  placeholder="Password"
                  required
                  type={showPassword ? "text" : "password"}
                  {...register('password', { required: 'The password is required ' })}
                />
                <Button type="button" className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent shadow-none hover:bg-transparent hover:text-[#b6b6b6] hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-col gap-2 mt-6">
            <Button type="submit" className="w-full bg-[#21acf2] hover:bg-[#2163f2] hover:cursor-pointer" disabled={loading && true}>
              {
                loading ?
                  <>
                    <Loader2Icon className="animate-spin" />
                    Please wait
                  </>
                  : textButton
              }
            </Button>
            {children}
          </div>
        </form>
      </CardContent>
    </Card>
  )
}