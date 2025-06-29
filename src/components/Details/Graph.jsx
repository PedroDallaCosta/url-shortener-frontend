import { Area, AreaChart, XAxis } from "recharts"

import {
  CardContent,
} from "@/components/ui/card"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  clicks: {
    label: "clicks",
    color: "var(--chart-1)",
  },
}

export default function Graph({ sortedGraph }) {
  return (
    <>
      <CardContent className="px-0">
        <ChartContainer config={chartConfig} className="w-full h-[150px] flex aspect-video justify-center text-xs m-0 p-0">
          <AreaChart data={sortedGraph}>
            <defs>
              <linearGradient id="fillClicks" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="1%"
                  stopColor="#9CABBA"
                  stopOpacity={0.9}
                />
                <stop
                  offset="50%"
                  stopColor="#9CABBA"
                  stopOpacity={0.0}
                />
              </linearGradient>
            </defs>

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={4}
              minTickGap={70}
              height={25}
              tick={{ fontSize: 8 }}
              tickFormatter={(value) => {
                const date = new Date(value)
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })
              }}
            />

            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })
                  }}
                  indicator="dot"
                />
              }
            />

            <Area
              dataKey="clicks"
              type="natural"
              fill="url(#fillClicks)"
              stroke="#9CABBA"
              strokeWidth={2}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </>
  )
}