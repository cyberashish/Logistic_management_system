"use client";

import { useContext, useEffect, useState } from "react";
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import { DashboardContext } from "@/app/store/DashboardContext";
import { Icon } from "@iconify/react/dist/iconify.js";
import SidebarLayout from "./SidebarLayout";
import MobileSidebar from "./MobileSidebar";



export default function Sidebar() {
  const { isMiniSidebar, setIsSidebarHovered, isSidebarHovered, setIsMiniSidebar } = useContext(DashboardContext);

  const [isMounted, setIsMounted] = useState(false); // Track hydration

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Or a simple skeleton UI

  return (
    
    <div
      onMouseEnter={() => setIsSidebarHovered(true)}
      onMouseLeave={() => setIsSidebarHovered(false)}
      className={`fixed z-[1999] lg:translate-x-0  border rounded-2xl border-border -translate-x-[256px] start-3 group top-24 transition-all bg-white  dark:bg-surface ${isMiniSidebar ? 'w-[72px] lg:translate-x-0 -translate-x-[72px] overflow-hidden hover:w-[256px] duration-250' : 'w-[256px]'}`}
    >
     <SimpleBar className="max-h-[calc(100vh_-_120px)] h-screen px-4" >
      <div className="py-4 px-0 flex items-center justify-between border-b border-border">
        {
          isMiniSidebar && isSidebarHovered ?
            <img src='/images/logo/Logitech_logo.svg' alt="logo" className="h-12 shrink-0 !w-fit !max-w-fit" />
            : isMiniSidebar ?
              <img src='/images/logo/Logitech_mini_logo.svg' alt="logo" className="h-12 shrink-0 !w-fit !max-w-fit" />
              :
              <img src='/images/logo/Logitech_logo.svg' alt="logo" className="h-12 shrink-0 !w-fit !max-w-fit" />
        }
        {
          (isMiniSidebar && isSidebarHovered) || !isMiniSidebar ?
            <button onClick={() => setIsMiniSidebar(!isMiniSidebar)} className="p-1 rounded-md shadow bg-white dark:bg-transparent border border-border hover:bg-primary hover:text-white transition-all">
              <Icon icon="mingcute:arrow-to-left-line" width={20} height={20} />
            </button> : null
        }
        <MobileSidebar />
      </div>
      <div className={`${isMiniSidebar ? 'px-0' : 'px-0'} transition-[padding] duration-200`}>
        <SidebarLayout />
      </div>
      </SimpleBar>
    </div>
    
  );
}
