import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useLogin } from "@/hooks/login";
import { Link } from "react-router-dom"

import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function Inputs() {
  const [showPassword, setShowPassword] = useState(false)
  const { login, setEmail, setPassword } = useLogin()

  return (
    <Card className="w-full max-w-sm mt-5 border-[#3B4A54] bg-transparent shadow-none">
      <CardContent>
        <form onSubmit={login}>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required className="text-white" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password" className="text-white">Password</Label>
                <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline text-[#ffffff3c]">Forgot your password?</a>
              </div>

              <div className="relative">
                <Input className="pr-10 text-white" placeholder="Password" type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} />
                <Button type="button" className="absolute right-1 top-1/2 -translate-y-1/2 bg-transparent shadow-none hover:bg-transparent hover:text-[#b6b6b6] hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-col gap-2 mt-6">
            <Button type="submit" className="w-full bg-[#21acf2] hover:bg-[#2163f2] hover:cursor-pointer">Login</Button>
            <Link to="/signup">
              <Button variant="outline" className="w-full bg-[#293038] hover:bg-[#1b2026] text-white border-none hover:text-[#cfcfcf] mt-2">Create account</Button>
            </Link>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}