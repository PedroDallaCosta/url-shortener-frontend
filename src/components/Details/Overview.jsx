import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

import CardC from "@/components/Details/Card"
import Title from "@/components/Details/Title"

export default function Overview({ clicks, uniqueClicks, topReferrers, url, createdAt, passwordProtected, expiresAt, path }) {
  const details = [
    {
      title: "Destionation URL",
      value: url,
    },
    {
      title: "Created",
      value: createdAt,
    },
    {
      title: "Password Protected",
      value: passwordProtected ? "Yes" : "No",
    },
    {
      title: "Expiration Date",
      value: expiresAt
    },
    {
      title: "Path",
      value: path
    }
  ]

  return (
    <div className="w-full mt-5 h-full">
      <div className="w-full flex justify-between items-center sm:gap-5 gap-2">
        <CardC title="Total Clicks" description={clicks}></CardC>
        <CardC title="Unique Clicks" description={uniqueClicks}></CardC>
        <CardC title="Top Referrer" description={topReferrers}></CardC>
      </div>

      <Title title={"Link details"} className={"mt-7"}></Title>
      
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