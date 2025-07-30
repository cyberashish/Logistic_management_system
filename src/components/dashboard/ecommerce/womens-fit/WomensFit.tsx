"use client";

import Image from "next/image";
import womenFit1 from "@/assets/images/products/women_fit1.png";
import womenFit2 from "@/assets/images/products/women_fit2.png";
import womenFit3 from "@/assets/images/products/women_fit3.png";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import CountdownTimer from "./CountdownTimer";

const WomensFit = () => {
    const [activeColor , setActiveColor] = useState("primary");
    const [activeWear , setActiveWear] = useState("womenFit1");
    const [activeWearImg , setActiveWearImg] = useState(womenFit1);

    const sizes = [
        {
            id: "1",
            size: "S"
        },
        {
            id: "2",
            size: "M"
        },
        {
            id: "3",
            size: "L"
        },
        {
            id: "4",
            size: "XL"
        },
    ]
    const colors = [
        {
            id: "1",
            bgColor: "bg-subtleprimary",
            outlineColor: "outline-subtleprimary",
            color:"primary"
        },
        {
            id: "2",
            bgColor: "bg-secondary",
            outlineColor: "outline-secondary",
            color: "secondary"
        },
        {
            id: "3",
            bgColor: "bg-pink",
            outlineColor: "outline-pink",
            color: "pink"
        },
        {
            id: "4",
            bgColor: "bg-brown",
            outlineColor: "outline-brown",
            color: "brown"
        },
    ]
    const womeanWears = [
        {
            id:"1",
            img:womenFit1,
            productName: "womenFit1"
        },
        {
            id:"2",
            img:womenFit2,
            productName: "womenFit2"
        },
        {
            id:"3",
            img:womenFit3,
            productName: "womenFit3"
        },
    ]
  return (
    <Card>
      <div className="grid grid-cols-12 gap-6">
        <div className="lg:col-span-6 col-span-12 grid grid-cols-12 gap-3">
            <div className="lg:col-span-3 col-span-12 flex flex-col gap-4">
                {
                    womeanWears.map((item) => (
                        <button key={item.id} onClick={() => {
                            setActiveWearImg(item.img);
                            setActiveWear(item.productName);
                        }} className={`size-14 bg-primary/10 rounded-md overflow-hidden ${activeWear === item.productName ? 'border border-gray-700' : ''}`}>
                        <Image src={item.img} alt="women_wear" />
                        </button>
                    ))
                }
            </div>
            <div className="lg:col-span-9 col-span-12 ">
                <div className="bg-primary/10 rounded-md" >
                <Image src={activeWearImg} alt="women_wear" className="w-full" />
                </div>
            </div>
        </div>
        <div className="lg:col-span-6 col-span-12">
            <div className="flex flex-col gap-0">
                <h3 className="text-xl font-semibold text-dark truncate">Women’s Fit and Flare Knee length one Piece Dress </h3>
                <h2 className="text-2xl font-semibold text-primary">$126</h2>
            </div>
            <div className="py-2.5 flex flex-col gap-1.5">
               <p className="text-base font-medium text-dark">Select size:</p>
               <div className="flex items-center gap-2">
                  {
                    sizes.map((item) => (
                        <span key={item.id} className="size-6 rounded-full flex items-center justify-center border border-gray-600 text-dark text-xs font-medium hover:bg-primary/10 hover:border-primary hover:text-primary cursor-pointer">
                        {item.size}
                     </span>
                    ))
                  }
               </div>
            </div>
            <div className="pb-2.5 flex flex-col gap-1.5">
               <p className="text-base font-medium text-dark">Color:</p>
               <div className="flex items-center gap-5">

                 {
                    colors.map((item) => (
                        <button key={item.id} onClick={() => setActiveColor(item.color)} className={`hover   size-3 rounded-full ${item.bgColor}   ${item.outlineColor} ${item.color === activeColor ? 'size-4 outline-0 flex items-center justify-center' : 'outline-1 outline-offset-3 outline-dashed hover:animate-rotate'}`}> 
                        {
                            item.color === activeColor ? <Icon icon="iconamoon:check-bold" className="text-white" width={12} height={12} /> : null
                        }
                        </button>
                    ))
                 }
               </div>
            </div>
            <div className="py-2.5 flex flex-col gap-1.5">
               <div className="flex flex-col gap-0">
                <p className="text-sm font-medium text-subtlegray leading-none">Special Discount</p>
               <p className="text-2xl font-semibold text-dark truncate">Deal of the  Day From Exclusive Deals</p>
               </div>
                <CountdownTimer/>
            </div>
        </div>
      </div>
    </Card>
  );
};

export default WomensFit;
