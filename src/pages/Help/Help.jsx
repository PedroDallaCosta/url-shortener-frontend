import Helps from "@/components/Help/Helps";
import SubTitle from "@/components/SubTitle";
import Title from "@/components/Title";
import Accordions from "@/components/Help/Accordion";

export default function Help() {
  return (
    <div className='flex flex-col items-center justify-center p-2 mt-6 '>
      <div className='p-1 w-full max-w-9/10 sm:max-w-3/5 '>
        <Title>Help center</Title>
        <SubTitle>Find answers to common questions about ShortenIt..</SubTitle>
        <Helps></Helps>
        <Accordions></Accordions>
      </div>
    </div>
  )
}