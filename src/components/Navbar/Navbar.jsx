import List from './List'
import Logo from './Logo'

export default function Navbar(){
  return (
    <nav className="flex justify-between py-4 px-5 border-b border-gray-300">
      <Logo />
      <List />
    </nav>
  )
}