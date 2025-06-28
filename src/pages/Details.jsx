import { useParams } from 'react-router-dom';
import { useDetails } from '@/hooks/useDetails';

import UrlData from '@/components/Details/UrlData';
import Title from '@/components/Title';
import SubTitle from '@/components/SubTitle';

export default function UrlDetails() {
  const { shortId } = useParams();
  const urlData = useDetails(shortId)

  return (
    <div className='flex flex-col items-center justify-center p-2 mt-6'>
      <div className='p-1 w-full max-w-9/10 sm:max-w-3/5 '>
        <Title>Link Details</Title>
        <SubTitle>View detailed analytics for your shortened link.</SubTitle>
        <UrlData urlData={urlData}></UrlData>
      </div>
    </div>
  )
}
