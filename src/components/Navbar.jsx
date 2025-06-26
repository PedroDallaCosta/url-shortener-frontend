import { Link } from 'react-router-dom'
import { useState } from 'react'
import starUrl from '@/assets/star.svg';
import { Button } from '@/components/ui/button';

const components = [
  { title: "Dashboard", refer: "/dashboard" },
  { title: "Pricing", refer: "/pricing" },
  { title: "Blog", refer: "/blog" },
  { title: "Help", refer: "/help" },
]

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <nav className="flex justify-between py-4 px-5 border-b border-gray-300">
      <Link to="/" className="flex items-center" onClick={() => handleClick(null)}>
        <img src={starUrl} alt="Star" className="w-8 h-8" />
        <h1 className='text-s text-white px-3 hover:!text-[#2194F2] hidden sm:block'>ShortenIt</h1>
      </Link>

      <ul className="flex items-center">
        {components.map(({ title, refer }, index) => (
          <li key={refer} >
            <Link to={refer} className={`mx-4 text-sm hover:!text-[#2194F2] ${activeIndex == index ? "!text-[#21acf2]" : "!text-white"} `} onClick={() => handleClick(index)}>
              {title}
            </Link>
          </li>
        ))}


        <Link to="/login" onClick={() => handleClick(null)}>
          <Button className="mr-2 ml-3 rounded-4xl bg-[#21acf2] hover:bg-[#2163f2] hover:cursor-pointer">Login</Button>
        </Link>

        <Link to="/signup" onClick={() => handleClick(null)}>
          <Button className="rounded-4xl hover:cursor-pointer bg-[#293038] hover:bg-[#1b2026]">Sign up</Button>
        </Link>
      </ul>
    </nav>
  )
}