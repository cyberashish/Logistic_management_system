

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"

export function Duration() {
    const [selectedTimeline , setSelectedTimeline] = useState("Last 7 days");
  return (
    <Select value={selectedTimeline} onValueChange={(value) => setSelectedTimeline(value)} >
      <SelectTrigger className="w-[140px]">
        <SelectValue/>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Timeline</SelectLabel>
          <SelectItem className="hover:bg-gray-100 dark:hover:bg-white/20" value="Last 7 days">Last 7 days</SelectItem>
          <SelectItem className="hover:bg-gray-100 dark:hover:bg-white/20" value="Last 30 days">Last 30 days</SelectItem>
          <SelectItem className="hover:bg-gray-100 dark:hover:bg-white/20" value="Last month">Last month</SelectItem>
          <SelectItem className="hover:bg-gray-100 dark:hover:bg-white/20" value="Last 6 months">Last 6 months</SelectItem>
          <SelectItem className="hover:bg-gray-100 dark:hover:bg-white/20" value="Last year">Last year</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
