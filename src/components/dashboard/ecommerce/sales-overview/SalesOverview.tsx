import { Card } from '@/components/ui/card'
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Icon } from '@iconify/react/dist/iconify.js';
import SalesChart from './SalesChart';

const SalesOverview = () => {
  return (
    <>
      <Card> 
        <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold text-dark leading-none">Sales Overview</h5>
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
        <SalesChart/>
      </Card>
    </>
  )
}

export default SalesOverview
