"use client";
import { Icon } from "@iconify/react";
import { useContext, useState } from "react";
import NavItem from "./NavItem";
import { DashboardContext } from "@/app/store/DashboardContext";

export default function NavCollapse({item}:{item:any}) {
  const [activeClassname, setActiveClassname] = useState(false);
  const {isMiniSidebar , isSidebarHovered} = useContext(DashboardContext);
  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => setActiveClassname(!activeClassname)}
          className={`py-[11px] cursor-pointer px-[13px] w-full rounded-md flex transition-all items-center justify-between  group/nav dark:hover:bg-lightprimary hover:bg-white/10 ${
            activeClassname ? "dark:bg-lightprimary bg-white/10" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <Icon
              icon={item.icon}
              width={18}
              height={18}
              className={` group-hover/nav:text-primary ${activeClassname ? 'text-primary':'text-dark'}`}
            />
            <p className={`${isMiniSidebar && isSidebarHovered ? 'block' : isMiniSidebar ? 'hidden' : 'block'} text-sm font-medium leading-none group-hover/nav:text-primary ${activeClassname ? 'text-primary':'text-dark'}`}>
              {item.title}
            </p>
          </div>
          <Icon
            icon="ci:chevron-right"
            width={14}
            height={14}
            className={`text-dark group-hover/nav:text-primary ${isMiniSidebar && isSidebarHovered ? 'block' : isMiniSidebar ? 'hidden' : 'block'}`}
          />
        </button>
        <div className={`${activeClassname ? "active" : ""} custom-collapse mt-1`}>
          <div className="flex flex-col" >
            {
              item.children.map((childItem:any , index:number) => {
                  return <NavItem key={index} item={childItem} />
              })
            }
          </div>
        </div>
      </div>
    </>
  );
}
