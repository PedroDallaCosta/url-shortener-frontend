import { NavLink, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useUserContext } from '@/context/userContext';
import starUrl from '@/assets/star.svg';

const navItems = [
  { title: "Dashboard", to: "/dashboard" },
  { title: "Pricing", to: "/pricing" },
  { title: "Blog", to: "/blog" },
  { title: "Help", to: "/help" },
]

export default function Navbar() {
  const { user } = useUserContext();

  return (
    <nav className="flex justify-between items-center py-4 px-5 border-b border-gray-300">
      <Link to="/" className="flex items-center gap-2">
        <img src={starUrl} alt="Logo" className="w-8 h-8" />
        <h1 className="text-s text-white hover:!text-[#2194F2] hidden sm:block">ShortenIt</h1>
      </Link>

      <ul className="flex items-center">
        {navItems.map(({ title, to }, index) => (
          <li key={to}>
            <NavLink to={to} className={({ isActive }) => `mx-3 text-sm hover:text-[#2194F2] ${isActive ?  "!text-[#21acf2]" : "text-white"}`}>{title}</NavLink>
          </li>
        ))}

        { user?.userId ? (
          <li>
            <Link to="/logout">
              <Button className="rounded-4xl bg-[#293038] hover:bg-[#1b2026]">Log out</Button>
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">
                <Button className="mr-2 ml-3 rounded-4xl bg-[#21acf2] hover:bg-[#2163f2]">Login</Button>
              </Link>
            </li>

            <li>
              <Link to="/signup">
                <Button className="rounded-4xl bg-[#293038] hover:bg-[#1b2026]">Sign up</Button>
              </Link>
            </li>
          </>
        )
        }
      </ul>
    </nav>
  );
}