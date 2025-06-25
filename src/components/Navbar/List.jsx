import { use } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const components = [
  { title: "Dashboard", refer: "/dashboard" },
  { title: "Pricing", refer: "/pricing" },
  { title: "Blog", refer: "/blog" },
  { title: "Help", refer: "/help" },
]

export default function List() {
  const [ activeIndex, setActiveIndex ] = useState({ x: 0, y: 0 })

  const handleClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <>
      <ul className="flex items-center">
        {components.map(({ title, refer }, index) => (
          <li key={refer} >
            <Link to={refer} className={`mx-4 text-sm hover:!text-[#2194F2] ${activeIndex == index ? "!text-[#21acf2]" : "!text-white"} `} onClick={() => handleClick(index)}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}