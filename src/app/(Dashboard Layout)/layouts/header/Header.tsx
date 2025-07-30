"use client";

import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "@/app/store/DashboardContext";
import Profile from "./Profile";
import Image from "next/image";
import profileImg from "@/assets/images/customers/customer_2.png";
import Notification from "./Notification";
import ThemeMode from "./ThemeMode";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function Header(){
    const {setIsMiniSidebar , isMiniSidebar} = useContext(DashboardContext);
    const [isFixed , setIsFixed] = useState(false);
    function handleScroll(){
      if(window.scrollY > 10){
          setIsFixed(true);
      }else{
        setIsFixed(false);
      }
    }
    useEffect(() => {
      window.addEventListener("scroll",handleScroll);
      () => {
        window.removeEventListener("scroll", handleScroll)
      }
    },[])
    function generateInvoice(orderId: number) {
      window.location.href = `/api/generate-invoice?orderId=${encodeURIComponent(orderId)}`;
    }
    return (
        <>
         <header className={`py-4 px-3 flex items-center justify-between overflow-y-auto backdrop-blur-2xl sticky top-0 z-[9] ${isFixed ? 'shadow-md dark:shadow-none' : ''}`}>
         <div className="flex items-start gap-12">      
          <div className="flex items-center gap-2">
            <Image width={40} height={40} className="rounded-full" src={profileImg} alt="logo" />
            <div className="flex flex-col">
              <p className="text-sm text-lightgray">Welcome back</p>
              <h6 className="text-sm text-dark">Tom!</h6>
            </div>
          </div>
          <div className="flex items-center gap-3">
          <Notification/>
           <h6 className="text-xl font-medium text-dark">Dashboard</h6>
          </div>
         </div>
         <img src={"/images/logo/dark_logo.svg"} alt="logo" className="h-7 shrink-0 !w-fit !max-w-fit lg:hidden block" /> 
          <div className="flex items-center gap-2.5">
           <ThemeMode/>
           <Button onClick={() => generateInvoice(3456) }  >
             <Icon width={18} height={18} icon="icon-park-outline:download-two" />
            Download
            </Button>
          </div>
         </header>
        </>
    )
}