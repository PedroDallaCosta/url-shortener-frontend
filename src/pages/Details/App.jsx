import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { getUrlDetails } from '@/service/api';
import Infos from '../../components/pages/Details/Infos';

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

  const handleClickCopy = async () => {
    await navigator.clipboard.writeText(urlData?.url);
    toast.success('Link copied to clipboard!')
  }

  return (
    <div className='flex flex-col items-center justify-center p-2'>
      <div className='p-1 w-full max-w-3/5'>
        <h1 className='text-2xl font-medium text-white mt-6'>Link Details</h1>
        <h2 className='font-light text-[#9CABBA] text-sm'>View detailed analytics for your shortened link.</h2>

        <div className='w-full flex justify-between gap-2 items-center mt-5'>
          <Input disabled={true} value={urlData?.url} className="text-white font-semibold" />
          <Button type="submit" variant="outline" onClick={handleClickCopy} className="bg-[#2194F2] text-white border-none font-bold">COPY</Button>
        </div>

        <Infos
          totalClicks={urlData?.totalClicks}
          uniqueClicks={urlData?.uniqueClicks}
          referrer={urlData?.referrer}
          url={urlData?.url}
          createdAt={urlData?.createdAt}
          passwordProtected={urlData?.passwordProtected}
          expirationDate={urlData?.expiresAt}
          path={urlData?.path}
        ></Infos>
      </div>
    </div>
  )
}
