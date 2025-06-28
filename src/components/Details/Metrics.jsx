import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Item from "@/components/Details/Item"
import Graph from "@/components/Details/Graph"
import Title from "@/components/Title"

export default function Metrics({ clicks = 0, unique_clicks = 0, referrer = "..." }) {
    return (
        <div className="w-full">
            <Card className="w-full mt-5 h-70 bg-transparent border-[#3B4A54] shadow-none">
                <CardHeader>
                    <CardTitle className="text-white font-medium text-[0.9rem]">Link Clicks Over Time</CardTitle>
                    <CardDescription className="text-white font-bold text-[1.75rem]">1,234</CardDescription>
                    <CardDescription className="text-[#A3ABB5] font-regular text-[0.9rem]">Last 30 Days <span className="text-green-500">+15%</span></CardDescription>
                    <Graph ></Graph>
                </CardHeader>
            </Card>

            <Title title={"Historical Data"} className={"mt-7"}></Title>

            <div className="w-full h-17 flex flex-col justify-between">
                <Item title="Total Clicks" value={clicks} />
                <Item title="Unique Clicks" value={unique_clicks} />
                <Item title="Referrer" value={referrer} />
            </div>
        </div>
    )
}