import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Items({ url, createdAt, passwordProtected, expirationDate, path }) {
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
      value: expirationDate
    },
    {
      title: "Path",
      value: path
    }
  ]

  return (
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
  )
}