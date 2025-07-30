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
import {v4 as uuidv4} from "uuid";



export default function Profile() {

    const profileItems = [
        {
          id: uuidv4(),
          title: "My Profile",
          bgColorCls: "bg-tertiary/20 text-tertiary",
          icon: "solar:user-outline",
        },
        {
          id: uuidv4(),
          title: "Settings",
          bgColorCls: "bg-error/20 text-error",
          icon: "solar:settings-linear",
        },
        {
          id: uuidv4(),
          title: "Manage Studio",
          bgColorCls: "bg-warning/20 text-warning",
          icon: "hugeicons:new-office",
        },
        {
          id: uuidv4(),
          title: "Instructors",
          bgColorCls: "bg-success/20 text-success",
          icon: "hugeicons:teacher",
        },
    
      ]
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
           <button className="size-8 focus-visible:outline-0 border border-primary/20 hover:bg-primary/20 hover:text-primary rounded-full bg-subtlebg dark:text-white text-primary text-lg font-medium uppercase dark:hover:bg-primary dark:hover:text-white">
            A
           </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          sideOffset={4}
          className=" max-w-96 border-border bg-surface shadow-lg p-0 z-[999]"
        >
            {
                profileItems.map((item) => {
                    return (
                        <DropdownMenuItem key={item.id} className="px-4 py-2 mb-0 cursor-pointer  flex items-start justify-between gap-4 hover group/item hover:bg-gray-100 dark:hover:bg-white/20" >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className={`size-8 rounded-full shrink-0 flex items-center justify-center ${item.bgColorCls}`}>
                           <Icon icon={item.icon}  className="shrink-0 !size-4" />
                          </span>
                          <h6 className="text-sm text-dark leading-tight max-w-48 truncate group-hover/item:text-primary">{item.title}</h6>
                        </div>
                      </DropdownMenuItem>
                    )
                })
            }
          <DropdownMenuSeparator />
           <div className="p-4 pt-2">
           <Button className="w-full cursor-pointer" >LogOut!</Button>
           </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
