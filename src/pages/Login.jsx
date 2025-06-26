import { useLogin } from "@/hooks/useLogin";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"
import Content from "@/components/Login/Contens";

export default function Login() {
  const { login, setEmail, setPassword } = useLogin()

  return (
    <div className="flex justify-center items-center">
      <div className="w-5/6 sm:w-2/7 h-3/4 flex flex-col items-center ">
        <h1 className="text-white font-bold mt-12 text-2xl text-center">Sign in to ShortenIt</h1>
        <Content submit={login} forgotPassword={true} setEmail={setEmail} setPassword={setPassword}>
          <div className="flex-col gap-2 mt-6">
            <Button type="submit" className="w-full bg-[#21acf2] hover:bg-[#2163f2] hover:cursor-pointer">Login</Button>
            <Link to="/signup">
              <Button variant="outline" className="w-full bg-[#293038] hover:bg-[#1b2026] text-white border-none hover:text-[#cfcfcf] mt-2">Create account</Button>
            </Link>
          </div>
        </Content>
      </div>
    </div>
  )
}