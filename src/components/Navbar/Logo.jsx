import { Link } from 'react-router-dom'
import starUrl from '../../assets/star.svg';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src={starUrl} alt="Star" className="w-8 h-8" />
      <h1 className='text-s text-white px-3 hover:!text-[#2194F2]'>ShortenIt</h1>
    </Link>
  )
}