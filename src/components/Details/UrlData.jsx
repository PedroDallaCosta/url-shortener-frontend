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

  const { totalClicks, unique_clicks, referrer = "No data", created_at, expire_date, havePassword, short, urlDetails, urlShort, urlDestination, graph, countrys } = urlData;

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
              totalClicks={totalClicks}
              unique_clicks={unique_clicks}
              referrer={referrer}
              urlDestination={urlDestination}
              created_at={created_at}
              havePassword={havePassword}
              expire_date={expire_date}
              short={short}
            ></Overview>
          </TabsContent>

          <TabsContent value="location">
            <Location countrys={countrys}></Location>
          </TabsContent>

          <TabsContent value="metrics">
            <Metrics totalClicks={totalClicks} unique_clicks={unique_clicks} referrer={referrer} graph={graph}></Metrics>
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}