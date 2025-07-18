import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Eye, EyeOff } from "lucide-react";
import { Controller } from 'react-hook-form';

export default function Advance({ register, control, selectedDate }) {
  const [open, setOpen] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  return (<>
    <div className="relative mt-3">
      <Input
        className="pr-10 text-white"
        placeholder="Password (optional)"
        type={showPassword ? "text" : "password"}
        {...register('password')}
      />

      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-2 top-1/2 -translate-y-1/2 hover:bg-transparent hover:text-[#b6b6b6]"
      >
        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
      </Button>
    </div>

    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          className="w-full justify-between font-normal bg-[#293038] text-white border-none mt-3 hover:bg-[#293038] hover:text-[#b6b6b6]"
        >
          {selectedDate}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        <Controller
          name="expireTime"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <Calendar
              mode="single"
              selected={field.value}
              captionLayout="dropdown"
              disabled={(date) => date < new Date() }
              onSelect={(date) => {
                field.onChange(date);
                setOpen(false);
              }}
            />
          )}
        />
      </PopoverContent>
    </Popover>
  </>)
}