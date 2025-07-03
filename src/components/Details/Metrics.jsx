import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import Item from "@/components/Details/Item"
import Graph from "@/components/Details/Graph"
import Title from "@/components/Title"

export default function Metrics({ totalClicks = 0, unique_clicks = 0, referrer = "...", graph = [] }) {
    let daysToSubtract = 30
    let variation = 0

    const filteredGraph = graph.filter((item) => {
        const date = new Date(item.date)
        const referenceDate = new Date()
        const startDate = new Date(referenceDate)
        startDate.setDate(startDate.getDate() - daysToSubtract)
        return date >= startDate
    })

    const sortedGraph = filteredGraph.slice().sort((a, b) => new Date(a.date) - new Date(b.date))
    if (sortedGraph.length > 1) {
        const initialValue = sortedGraph[0].clicks;
        const finalValue = sortedGraph[sortedGraph.length - 1].clicks;

        if (initialValue === 0) {
            variation = finalValue === 0 ? 0 : Infinity;
        } else {
            variation = ((finalValue - initialValue) / initialValue) * 100;
        }
    }

    return (
        <div className="w-full">
            <Card className="w-full mt-5 h-70 bg-transparent border-[#3B4A54] shadow-none">
                <CardHeader>
                    <CardTitle className="text-white font-medium text-[0.9rem]">Link Clicks Over Time</CardTitle>
                    <CardDescription className="text-white font-bold text-[1.75rem]">{totalClicks.toLocaleString()}</CardDescription>
                    <CardDescription className="text-[#A3ABB5] font-regular text-[0.9rem]">Last 30 Days <span className={variation > 0 ? "text-green-500" : "text-red-500"}>{variation.toFixed(2)}%</span></CardDescription>
                    <Graph sortedGraph={sortedGraph} ></Graph>
                </CardHeader>
            </Card>

            <Title title={"Historical Data"} className={"mt-7"}></Title>

            <div className="w-full h-17 flex flex-col justify-between">
                <Item title="Total Clicks" value={totalClicks} />
                <Item title="Unique Clicks" value={unique_clicks} />
                <Item title="Referrer" value={referrer} />
            </div>
        </div>
    )
}