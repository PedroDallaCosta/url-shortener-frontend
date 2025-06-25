import { Link } from 'react-router-dom'
import { useState } from 'react'
import starUrl from '../assets/star.svg';

const components = [
  { title: "Dashboard", refer: "/dashboard" },
  { title: "Pricing", refer: "/pricing" },
  { title: "Blog", refer: "/blog" },
  { title: "Help", refer: "/help" },
]

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState({ x: 0, y: 0 })

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <nav className="flex justify-between py-4 px-5 border-b border-gray-300">
      <Link to="/" className="flex items-center">
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
      </ul>
    </nav>
  )
}