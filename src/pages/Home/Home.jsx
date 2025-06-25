import Form from "@/components/Home/Form"

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-3/4 sm:w-2/7 h-[85px] flex flex-col items-center">
        <h1 className="text-white font-bold mt-12 text-2xl text-center">Shorten your links</h1>
        <h2 className="text-white font-light mt-3 text-xs text-center">Simplify your links with our fast, easy tool. Clean URLs perfect for sharing and tracking.</h2>
        <Form></Form>
      </div>
    </div>
  )
}