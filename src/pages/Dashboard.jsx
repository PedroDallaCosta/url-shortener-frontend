import SubTitle from '@/components/SubTitle';
import Title from '@/components/Title';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import Menu from '@/components/Dashboard/Menu';

export default function Dashboard() {
  return (
    <div className='flex flex-col items-center justify-center p-2 mt-6'>
      <div className='p-1 w-full max-w-9/10 sm:max-w-3/5 '>
        <Title>Manage link</Title>
        <SubTitle>Manage your active and inactive links</SubTitle>
        <div className='relative'>
          <Input placeholder="Search links" className="mt-5 py-5 pl-10 font-bold"></Input>
          <Search className='absolute top-[50%] translate-y-[-50%] left-2 h-[1.3em] opacity-40'/>
        </div>
        
        <Menu></Menu>
      </div>
    </div>
  )
}