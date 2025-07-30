"use client"
import { Card } from '@/components/ui/card'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Icon } from '@iconify/react/dist/iconify.js';
import Image from 'next/image';
import customer1 from "@/assets/images/customers/customer_1.png"
import customer2 from "@/assets/images/customers/customer_2.png"
import customer3 from "@/assets/images/customers/customer_3.png"
import customer4 from "@/assets/images/customers/customer_4.png"
import customer5 from "@/assets/images/customers/customer_5.png"
import CustomerInfo from './CustomerInfo';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


const RecentCustomers = () => {
  const customersInsights = [
    {
        id: "1",
        img: customer1 ,
        customerName: "Junsung Park",
        customerId: "32449",
        purchasedValue: 8282.13,
        time: "50 min ago",
        status: "paid"
    },
    {
        id: "2",
        img: customer2,
        customerName: "Yongjae Choi",
        customerId: "95460",
        purchasedValue: 9546.84,
        time: "34 min ago",
        status: "pending"
    },
    {
        id: "3",
        img: customer3,
        customerName: "Seonil Jang",
        customerId: "95468",
        purchasedValue: 2354.16,
        time: "30 min ago",
        status: "paid"
    },
    {
        id: "4",
        img: customer4,
        customerName: "Joohee Min",
        customerId: "95462",
        purchasedValue: 3254.35,
        time: "25 min ago",
        status: "pending"
    },
    {
        id: "5",
        img: customer5,
        customerName: "Soojung Kin",
        customerId: "34586",
        purchasedValue: 3654.32,
        time: "23 min ago",
        status: "paid"
      }
  ]
  return (
    <>
      <Card className='px-0' > 
        <div className="flex items-center justify-between mb-2 px-6">
        <h5 className="text-lg font-semibold text-dark leading-none">Recent Customers</h5>
      <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full focus-visible:ring-0 focus-visible:outline-0 group before:absolute before:top-1/2 before:-translate-y-1/2 before:start-1/2 before:-translate-x-1/2 before:size-8 before:rounded-full hover:before:bg-subtlebg dark:hover:before:bg-background dark:hover:text-white relative text-muted hover:text-primary before:z-[0] group/item">
                  <Icon icon="bi:three-dots" width={18} height={18} className="group-hover/item:text-muted relative z-100" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border-border bg-surface shadow-lg p-0">
                  <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-background flex items-start justify-between gap-4 hover group/item">
                   Weekly
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-background flex items-start justify-between gap-4 hover group/item">
                    Monthly
                  </DropdownMenuItem>
                  <DropdownMenuItem className="px-4 py-2 cursor-pointer hover:bg-background flex items-start justify-between gap-4 hover group/item">
                    Yearly
                  </DropdownMenuItem>
              </DropdownMenuContent>
      </DropdownMenu>
        </div>
        <SimpleBar style={{ maxHeight: 306 }}>
       <div className="flex flex-col px-6">
        {
          customersInsights.map((itemVal) => (
            <CustomerInfo key={itemVal.id} item={itemVal} />
          ))
        }
       </div>
       </SimpleBar>
      </Card>
    </>
  )
}

export default RecentCustomers
