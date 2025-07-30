"use client";
import { DashboardContext } from "@/app/store/DashboardContext";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";

export default function NavItem({item}:{item:any}) {
  const [activeClassname, setActiveClassname] = useState(false);
  const {isMiniSidebar , isSidebarHovered} = useContext(DashboardContext);

  const pathname = usePathname();
  useEffect(() => {
     const isActive = pathname === item.url;
     setActiveClassname(isActive);
  },[])
  return (
    <>
      <Link href={item.url}
        className={`mb-1 py-[11px] relative after:absolute after:w-full after:h-full after:bg-yellow-400 after:-start-4 hover:!bg-primary hover:!text-white ease-in-out cursor-pointer px-[10px] w-full rounded-md flex transition-all items-center justify-between group/nav ${item.icon ? 'dark:hover:bg-lightprimary hover:bg-white/10' :''} ${
          activeClassname && item.icon ? "bg-primary text-white" : ""
        }`}
      >
        <div className="flex items-center gap-2">
          {
            item.icon ? <Icon
            icon={item.icon}
            width={18}
            height={18}
            className={`shrink-0 ${activeClassname && item.icon ? 'text-white' : 'text-dark group-hover/nav:text-white dark:group-hover/nav:text-white dark:text-white/70'}`}
          /> : <>
          <Icon icon='octicon:dot-16' width={18} height={18} className="text-primary/80 shrink-0" />
          </>
          }
          <p className={`whitespace-nowrap ${isMiniSidebar && isSidebarHovered ? 'visible' : isMiniSidebar ? 'invisible' : 'visible'} text-sm font-medium leading-none ${activeClassname && item.icon ? 'text-white' : 'text-dark group-hover/nav:text-white dark:group-hover/nav:text-white dark:text-white/70'}`}>
            {item.title}
          </p>
        </div>
       {item.icon && item.offspring ?  <Icon
          icon="ci:chevron-right"
          width={14}
          height={14}
          className="text-dark group-hover/nav:text-primary"
        />:null}
      </Link>
    </>
  );
}
