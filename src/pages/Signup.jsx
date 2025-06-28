import Content from "@/components/Login/Contens";
import { Button } from "@/components/ui/button";
import { useSignup } from "@/hooks/useSignup";
import { Link } from "react-router-dom"

export default function Signup() {
  const { handleSubmit, register, loading } = useSignup()

  return (
    <div className="flex justify-center items-center">
      <div className="w-5/6 sm:w-2/7 h-3/4 flex flex-col items-center ">
        <h1 className="text-white font-bold mt-12 text-2xl text-center">Sign up to ShortenIt</h1>
        <Content forgotPassword={false} textButton={"Signup"} handleSubmit={handleSubmit} register={register} loading={loading}>
          <Link to="/login">
            <Button variant="outline" className="w-full bg-[#293038] hover:bg-[#1b2026] text-white border-none hover:text-[#cfcfcf] mt-2">I have account</Button>
          </Link>
          <p className="text-[#9CABBA] text-[0.6em] font-extralight mt-5">
            By creating an account, you agree to the Terms of Service. For more information about ShortenIt privacy practices, see the ShortenIt Privacy Statement. We'll occasionally send you account-related emails.
          </p>
        </Content>
      </div >
    </div >
  )
}