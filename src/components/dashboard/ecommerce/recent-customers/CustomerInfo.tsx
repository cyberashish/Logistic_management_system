"use client"
import { Icon } from '@iconify/react/dist/iconify.js'
import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Customer = {
    id: string;
    img: StaticImageData;
    customerName: string;
    customerId: string;
    purchasedValue: number;
    time: string;
    status: string;
  };

const CustomerInfo = ({item}:{item:Customer}) => {
  return (
    <div className="py-3.5 flex group cursor-pointer items-center justify-between border-b border-dashed border-border last:border-b-0 last:pb-0">
    <div className="flex items-center gap-2">
       <div className="relative">
       <Image src={item.img} alt="customer" className='size-9 rounded-full' />
       <span className="size-2.5 border-2 opacity-0 group-hover:opacity-100 border-white absolute top-0.5 end-0 bg-subtleprimary rounded-full"></span>
       </div>
       <div className="flex flex-col items-start">
         <h5 className="text-[15px] font-medium text-dark group-hover:text-subtleprimary">{item.customerName}</h5>
         <div className="flex items-center gap-1">
           {
            item.status === "paid" ? <Icon icon="mynaui:check-waves-solid" width={16} height={16} className='text-success' /> : <Icon icon="mingcute:alert-fill" width={16} height={16} className='text-warning' />
           }
            <p className="text-[13px] font-normal text-subtlegray">{`ID #${item.customerId}`}</p>
         </div>
       </div>
    </div>
    <div className="flex flex-col items-start">
         <h5 className="text-[15px] font-medium text-dark">{`$${item.purchasedValue}`}</h5>
         <p className="text-[13px] font-normal text-subtlegray">{item.time}</p>
       </div>
</div>
  )
}

export default CustomerInfo
