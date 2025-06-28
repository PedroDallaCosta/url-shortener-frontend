import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

import CardC from "@/components/Details/Card"
import Title from "@/components/Title"

export default function Overview({ clicks, unique_clicks, referrer, url, created_at, passwordProtected, expire_at, short }) {
  const details = [
    {
      title: "Destionation URL",
      value: url,
    },
    {
      title: "Created",
      value: created_at,
    },
    {
      title: "Password Protected",
      value: passwordProtected ? "Yes" : "No",
    },
    {
      title: "Expiration Date",
      value: expire_at
    },
    {
      title: "Path",
      value: short
    }
  ]

  return (
    <div className="w-full mt-5 h-full">
      <div className="w-full flex justify-between items-center sm:gap-5 gap-2">
        <CardC title="Total Clicks" description={clicks}></CardC>
        <CardC title="Unique Clicks" description={unique_clicks}></CardC>
        <CardC title="Top Referrer" description={referrer}></CardC>
      </div>

      <Title className={"mt-7 text-xl"}>Details</Title>
      
      <Table>
        <TableBody>
          {details.map((detail) => (
            <TableRow key={detail.title} className="hover:bg-transparent">
              <TableCell className="font-regular text-xs text-[#A3ABB5] py-5 px-0">{detail.title}</TableCell>
              <TableCell className="font-regular text-xs text-white text-right">{detail.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}