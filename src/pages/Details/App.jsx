import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from "sonner"
import { getUrlDetails } from '@/service/api';

import UrlData from '@/components/Details/UrlData';

export default function UrlDetails() {
  const { shortId } = useParams();
  const [urlData, setUrlData] = useState(null);

  useEffect(() => {
    const fetchUrlDetails = async () => {
      try {
        if (!shortId || shortId === undefined) {
          throw new Error("Invalid shortId provided");
        }

        const result = await getUrlDetails(shortId);
        if (!result.success) {
          const msg = result.error?.message ?? "Failed to fetch URL details";
          throw new Error(msg);
        }

        const { data } = result;
        setUrlData(data);
      } catch (apiError) {
        const errorMessage = apiError instanceof Error ? apiError.message : "Unknown error";
        toast.error(errorMessage);
      }
    };

    fetchUrlDetails();
  }, [shortId]);

  return (
    <div className='flex flex-col items-center justify-center p-2'>
      <div className='p-1 w-full  max-w-9/10 sm:max-w-3/5'>
        <h1 className='text-2xl font-medium text-white mt-6'>Link Details</h1>
        <h2 className='font-light text-[#9CABBA] text-sm'>View detailed analytics for your shortened link.</h2>

        <UrlData urlData={urlData}></UrlData>
      </div>
    </div>
  )
}
