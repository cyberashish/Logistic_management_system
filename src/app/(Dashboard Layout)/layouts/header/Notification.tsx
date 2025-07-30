import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useMemo, useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function Notification() {
  const [isNotificationOpen , setIsNotificationOpen] = useState(false);
  const [selectedNotification , setSelectedNotification] = useState("");

  const notifications = [
    {
      id: uuidv4(),
      title: "Noise Smartwatch is down to 2 items in stock",
      subtitle: "Restock soon to avoid missed sales.",
      bgColorCls: "bg-tertiary/20 text-tertiary",
      icon: "solar:watch-square-outline",
      time: "11:23 am"
    },
    {
      id: uuidv4(),
      title: "A payment attempt for ₹1,499 failed.",
      subtitle: "Check status or contact the buyer.",
      bgColorCls: "bg-error/20 text-error",
      icon: "majesticons:analytics-line",
      time: "09:10 pm"
    },
    {
      id: uuidv4(),
      title: "One of your shipments is delayed beyond the expected date.",
      subtitle: "Consider updating the customer.",
      bgColorCls: "bg-warning/20 text-warning",
      icon: "iconamoon:delivery-fast-light",
      time: "01:10 pm"
    },
    {
      id: uuidv4(),
      title: "A user redeemed the WELCOME100 coupon.",
      subtitle: "Track usage in promo dashboard.",
      bgColorCls: "bg-success/20 text-success",
      icon: "streamline:discount-percent-coupon",
      time: "10:22 am"
    },

  ]
  const memoizedNotification = useMemo(() => notifications, []);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="p-2.5 shadow bg-surface rounded-full focus-visible:ring-0 focus-visible:outline-0 notification-btn group hover:bg-primary/20 dark:hover:bg-primary dark:hover:text-white relative text-muted hover:text-primary">
            <Icon icon="solar:bell-bold" width={18} height={18} />
            <span className="size-3.5 text-[10px] font-medium text-white bg-secondary absolute rounded-full -top-0">
              4
            </span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={4}
          className="w-86 max-w-96 border-border bg-surface shadow-lg p-0 z-[9999]"
        >
          <DropdownMenuLabel className="text-lg p-3 font-medium flex items-center justify-between">
            Notifications
            <Badge>5 New</Badge>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {
            memoizedNotification.map((item) => (
              <div key={item.id} className={`hover:bg-gray-100 dark:hover:bg-white/20 ${isNotificationOpen && selectedNotification === item.title ? 'bg-gray-100 dark:bg-white/20' : ''}`} onClick={() => {
                setIsNotificationOpen(!isNotificationOpen);
                setSelectedNotification(item.title)
              }} >
              <DropdownMenuItem onSelect={(e) => {
            e.preventDefault();
          }} className="px-4 py-2 mb-1 cursor-pointer  flex items-start justify-between gap-4 hover group/item" >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className={`size-9 rounded-full shrink-0 flex items-center justify-center ${item.bgColorCls}`}>
                 <Icon icon={item.icon} className="shrink-0 !size-5" />
                </span>
                 <div className="flex flex-col gap-0 min-w-0">
                  <h6 className="text-sm text-dark leading-tight max-w-48 truncate group-hover/item:text-primary">{item.title}</h6>
                  <p className="text-xs text-lightgray leading-none max-w-48 truncate">{item.subtitle}</p>
                 </div>
              </div>
              <div className="flex items-center gap-1">
              <span className="text-xs text-lightgray whitespace-nowrap">{item.time}</span>
              <span className="hidden group-hover/item:block" ><Icon icon="pajamas:chevron-lg-down" width={20} height={20} className="text-lightgray" /></span>
              </div>
            </DropdownMenuItem>
              <div className={` ${isNotificationOpen && selectedNotification === item.title ? "max-h-[1000px] opacity-100 p-4 py-3" : "max-h-0 opacity-0"} overflow-hidden border-t border-border`}>
              <div className="flex flex-col gap-1 min-w-0">
                  <h6 className="text-sm text-dark leading-tight group-hover/item:text-primary">{item.title}</h6>
                  <p className="text-xs text-lightgray leading-none">Restock soon to avoid missed sales.</p>
                 </div>
              </div>
            </div>
            ))
          }
          {/* <DropdownMenuSeparator />
           <div className="p-4 pt-2">
           <Button className="w-full cursor-pointer" >See all notifications!</Button>
           </div> */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
