import Overview from "@/components/Details/Overview";
import Metrics from "@/components/Details/Metrics";
import Location from "@/components/Details/Location";
import { MutatingDots } from 'react-loader-spinner'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import InputButton from "@/components/Details/InputButton";

export default function UrlData({ urlData }) {
  if (!urlData) return (
    <div className="w-full h-70 md:1/4 flex justify-center items-end ">
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#2194F2"
        secondaryColor="#2194F2"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )



  const { totalClicks, uniqueClicks, referrer, createdAt, url, expiresAt, passwordProtected, path } = urlData;
  return (
    <>
      <InputButton url={url}></InputButton>

      <div className="flex flex-col w-full gap-6 mt-6">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Overview
              clicks={totalClicks}
              uniqueClicks={uniqueClicks}
              topReferrers={referrer}
              url={url}
              createdAt={createdAt}
              passwordProtected={passwordProtected}
              expiresAt={expiresAt}
              path={path}
            ></Overview>
          </TabsContent>

          <TabsContent value="location">
            <Location></Location>
          </TabsContent>

          <TabsContent value="metrics">
            <Metrics totalClicks={totalClicks} uniqueClicks={uniqueClicks} referrer={referrer}></Metrics>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}