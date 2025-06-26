import { Inputs } from "@/components/Login/Inputs";

export default function Login() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-5/6 sm:w-2/7 h-3/4 flex flex-col items-center ">
          <h1 className="text-white font-bold mt-12 text-2xl text-center">Sign in to ShortenIt</h1>
          <Inputs></Inputs>
        </div>
      </div>
    </>
  )
}