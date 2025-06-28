import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom"
import Content from "@/components/Login/Contens";
import { useLogin } from "@/hooks/useLogin";

export default function Login() {
  const { handleSubmit, register, loading } = useLogin()

  return (
    <div className="flex justify-center items-center">
      <div className="w-5/6 sm:w-2/7 h-3/4 flex flex-col items-center ">
        <h1 className="text-white font-bold mt-12 text-2xl text-center">Sign in to ShortenIt</h1>
        <Content forgotPassword={true} textButton={"Login"} handleSubmit={handleSubmit} register={register} loading={loading}>
          <Link to="/signup">
            <Button variant="outline" className="w-full bg-[#293038] hover:bg-[#1b2026] text-white border-none hover:text-[#cfcfcf] mt-2">Create account</Button>
          </Link>
        </Content>
      </div>
    </div>
  )
}