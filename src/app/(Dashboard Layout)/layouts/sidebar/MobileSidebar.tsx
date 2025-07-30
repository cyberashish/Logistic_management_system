import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Icon } from "@iconify/react/dist/iconify.js"
import { useContext } from "react"
import { DashboardContext } from "@/app/store/DashboardContext"
import SidebarLayout from "./SidebarLayout"

const MobileSidebar = () => {
    const {isMiniSidebar , isSidebarHovered} = useContext(DashboardContext);
  return (
<Sheet>
  <SheetTrigger asChild >
  <button className="p-1.5 lg:hidden block rounded-full focus-visible:ring-0 focus-visible:outline-0 bg-subtlebg group hover:bg-primary/20 dark:hover:bg-primary dark:hover:text-white r text-dark hover:text-primary">
            <Icon icon="tabler:menu-3" width={24} height={24} />
          </button>
  </SheetTrigger>
  <SheetContent side="left" className="z-[9999] [&_[data-radix-sheet-close]]:hidden" >
    <SheetHeader>
      <SheetTitle className="hidden" >Are you absolutely sure?</SheetTitle>
      <SheetDescription asChild>
        <div>
        <div className="py-5 px-0">
           {
            isMiniSidebar && isSidebarHovered ?   <img src={"/images/logo/logo.svg"} alt="logo" className="h-7 shrink-0 !w-fit !max-w-fit" /> : isMiniSidebar ?  <img src={"/images/logo/mini-logo.svg"} alt="logo" className="h-6 shrink-0 !w-fit !max-w-fit" /> : <img src={"/images/logo/logo.svg"} alt="logo" className="h-7 shrink-0 !w-fit !max-w-fit" />
           }
          
        </div>
        <SidebarLayout/>
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default MobileSidebar
