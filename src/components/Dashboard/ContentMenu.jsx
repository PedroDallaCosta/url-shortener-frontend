import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useNavigate } from "react-router-dom";

export default function ContentMenu({ filterLinks }) {
  if (!filterLinks || filterLinks.length <= 0) return <></>

  const navigate = useNavigate()
  const editClickPage = (short) => {
    navigate(`/details/${short}`)
  }

  return (
    <div className="border-1 border-[#ffffff47] overflow-hidden rounded-2xl mt-5 w-full h-full">
      <Table>
        <TableHeader >
          <TableRow className="bg-[#1F2124] hover:!bg-[#1F2124] border-[#ffffff47]">
            <TableHead className="w-3/10 text-white font-light text-xs py-3 px-5">Short links</TableHead>
            <TableHead className="text-white font-light text-2xs">Destination</TableHead>
            <TableHead className="text-white font-light text-2xs">Created</TableHead>
            <TableHead className="text-white font-light text-2xs">Clicks</TableHead>
            <TableHead className="text-white font-light text-2xs">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody >
          {
            filterLinks.map(({ havePassword, urlDestination, short, linkShort, linkDetails, created_at, totalClicks, isExpire }) => {
              return (
                <TableRow key={short} className="h-15 hover:!bg-transparent border-[#ffffff47]">
                  <TableCell className="font-light text-[0.8em] px-5">{linkShort}</TableCell>
                  <TableCell className="font-light text-[0.8em]">{urlDestination.length <= 25 ? urlDestination : `${urlDestination.slice(0, 25)}...`}</TableCell>
                  <TableCell className="font-light text-[0.8em]">{new Date(created_at).toLocaleString()}</TableCell>
                  <TableCell className="font-light text-[0.8em]">{totalClicks}</TableCell>
                  <TableCell className="font-light text-[0.8em] hover:underline hover:cursor-pointer" onClick={() => editClickPage(short)}>Edit</TableCell>
                </TableRow>
              );
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}