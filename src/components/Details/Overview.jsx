import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { Pen } from 'lucide-react';

import CardC from "@/components/Details/Card"
import Title from "@/components/Title"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { Label } from "recharts";
import { Input } from "../ui/input";

export default function Overview({ totalClicks, unique_clicks, referrer, urlDestination, created_at, havePassword, expire_date, short }) {
  const details = [
    {
      title: "Destionation URL",
      value: urlDestination,
    },
    {
      title: "Created",
      value: created_at,
    },
    {
      title: "Password Protected",
      value: havePassword ? "Yes" : "No",
      edit: true,
    },
    {
      title: "Expiration Date",
      value: expire_date,
      edit: true,
    },
    {
      title: "Path",
      value: short
    }
  ]

  return (
    <div className="w-full mt-5 h-full">
      <div className="w-full flex justify-between items-center sm:gap-5 gap-2">
        <CardC title="Total Clicks" description={totalClicks}></CardC>
        <CardC title="Unique Clicks" description={unique_clicks}></CardC>
        <CardC title="Top Referrer" description={referrer}></CardC>
      </div>

      <Title className={"mt-7 text-xl"}>Details</Title>

      <Table>
        <TableBody>
          {details.map(({ title, value, edit }) => (
            <TableRow key={title} className="hover:bg-transparent h-full flex items-center justify-between">
              <TableCell className="font-regular text-xs text-[#A3ABB5] py-5 px-0">{title}</TableCell>
              <TableCell className="font-regular text-xs text-white flex justify-end items-center">
                <span>{value}</span>
                {edit && value != "" && value != "No" &&
                  <Dialog>
                    <form>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="border-none shadow-none bg-transparent w-0 h-6 ml-3 hover:bg-transparent hover:scale-120">
                          <Pen className="w-3 text-white"></Pen>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px] bg-[#12151a] border-[#3B4A54]">
                        <DialogHeader>
                          <DialogTitle>Edit {title}</DialogTitle>
                          <DialogDescription>
                            Make changes to your {title.toLowerCase()} here. Click save when you&apos;re
                            done.
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4">
                          <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" defaultValue={value} />
                          </div>
                        </div>
                        <DialogFooter>
                          <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                          </DialogClose>
                          <Button type="submit" className="bg-[#2194F2]">Save changes</Button>
                        </DialogFooter>
                      </DialogContent>
                    </form>
                  </Dialog>

                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

//  <span className="ml-2 hover:scale-120 hover:cursor-pointer" onClick={() => onClickChange()}>
//             <Pen className="w-3"></Pen>
//           </span>