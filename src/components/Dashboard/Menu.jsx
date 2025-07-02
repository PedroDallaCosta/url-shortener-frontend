import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useDashboard } from "@/hooks/useDashboard"
import { useState } from "react"
import ContentMenu from "./ContentMenu"

export default function Menu() {
  const [filter, setFilter] = useState("alllinks")
  const linksDashboard = useDashboard()

  const handleTabChange = (value) => {
    setFilter(value)
  }

  let filterLinks
  if (linksDashboard && linksDashboard.length > 0) {
    filterLinks = linksDashboard.filter(item => {
      return (
        (filter === "active" && !item.isExpire) ||
        (filter === "inactive" && item.isExpire) ||
        (filter === "alllinks")
      );
    });
  }

  return (
    <div className="flex flex-col w-full gap-6 mt-6">
      <Tabs defaultValue={filter} onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="alllinks">All links</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="inactive">Inactive</TabsTrigger>
        </TabsList>

        <TabsContent value="alllinks">
          <ContentMenu filterLinks={filterLinks}></ContentMenu>
        </TabsContent>

        <TabsContent value="active">
          <ContentMenu filterLinks={filterLinks}></ContentMenu>
        </TabsContent>

        <TabsContent value="inactive">
          <ContentMenu filterLinks={filterLinks}></ContentMenu>
        </TabsContent>
      </Tabs>
    </div>
  )
}