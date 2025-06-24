import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Overview from "./OptionsList/Overview/Overtime"
import Location from "./OptionsList/Location/Location"
import Metrics from "./OptionsList/Metrics/Metrics"

export default function Infos({ totalClicks = 0, uniqueClicks = 0, referrer = "...", url = "", createdAt = "", passwordProtected = false, expirationDate = "", path = "" }) {
  return (
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
            expirationDate={expirationDate}
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
  )
}