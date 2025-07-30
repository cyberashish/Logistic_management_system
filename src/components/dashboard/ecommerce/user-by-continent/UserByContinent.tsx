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
import dynamic from 'next/dynamic';
import ProgressChart from './ProgressChart';
const WorldMap = dynamic(() => import('@/components/maps/WorldMap'), {
    ssr: false,
  });


const UserByContinent = () => {
  const data = [
    { label: 'Europe', percentage: 36.56, color: 'text-subtleprimary' },
    { label: 'United States', percentage: 20.33, color: 'text-secondary' },
    { label: 'Germany', percentage: 17.36, color: 'text-pink' },
    { label: 'Romania', percentage: 12.22, color: 'text-brown' },
    { label: 'Africa', percentage: 8.87, color: 'text-success' },
    { label: 'Australia', percentage: 4.66, color: 'text-error' },
  ];
  return (
    <>
      <Card className='w-full' > 
        <div className="flex items-center justify-between mb-3">
        <h5 className="text-lg font-semibold text-dark leading-none">Global Distribution</h5>
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
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <h6 className="text-base font-semibold text-dark">1506</h6>
            <p className="text-sm text-subtlegray">items</p>
          </div>
          <div className="max-w-40 rounded-full">
            <ProgressChart/>
          </div>
        </div>
        <div className="pt-6 mt-6 border-t border-dashed border-border">
          <div className="grid grid-cols-12 gap-0">
            <div className="lg:col-span-4 col-span-1">
               <div className="flex flex-col gap-3">
                 <h6 className="text-[15px] font-semibold text-dark">All Over Contries's Sale</h6>
                 <div className="flex flex-col gap-3">
                   {
                    data.map((item) => (
                      <div key={item.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Icon icon="solar:map-arrow-right-bold" width={18} height={18} className={item.color} />
                        <h5 className="text-sm font-medium text-dark">{item.label}</h5>
                      </div>
                      <p className="text-sm font-medium text-subtlegray">{`${item.percentage}%`}</p>
                    </div>
                    ))
                   }
                 </div>
               </div>
            </div>
            <div className="lg:col-span-8 col-span-12">
            <WorldMap />
            </div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default UserByContinent
