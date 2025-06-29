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

  const { clicks, unique_clicks, referrer = "No data", created_at, expire_at, passwordProtected, short, urlDetails, urlShort, urlDestination, graphClicks } = urlData;
  
  return (
    <>
      <InputButton urlShort={urlShort}></InputButton>

      <div className="flex flex-col w-full gap-6 mt-6">
        <Tabs defaultValue="overview">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="metrics">Metrics</TabsTrigger>
            <TabsTrigger value="location">Location</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <Overview
              clicks={clicks}
              unique_clicks={unique_clicks}
              referrer={referrer}
              urlDestination={urlDestination}
              created_at={created_at}
              passwordProtected={passwordProtected}
              expire_at={expire_at}
              short={short}
            ></Overview>
          </TabsContent>

          <TabsContent value="location">
            <Location></Location>
          </TabsContent>

          <TabsContent value="metrics">
            <Metrics clicks={clicks} unique_clicks={unique_clicks} referrer={referrer} graphClicks={graphClicks}></Metrics>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}