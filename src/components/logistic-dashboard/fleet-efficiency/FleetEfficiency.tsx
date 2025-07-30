"use client";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import FleetChart from "./FleetChart";
import { v4 as uuidv4 } from "uuid";
import { useContext, useEffect, useState } from "react";
import { DashboardContext } from "@/app/store/DashboardContext";


export default function FleetEfficiency() {
 
  // timeline based data
  const weeklySeries = [23, 23, 4];
  const monthlySeries = [23 * 4, 23 * 3, 4 * 14];
  const yearlySeries = [23 * 10, 23 * 6, 4 * 27];

  const {activeTimeline , setActiveTimeline , efficiency , setEfficiency} = useContext(DashboardContext);
  const [activeSeries, setActiveSeries] = useState(weeklySeries);

  const timelines = ["This Week", "This Month", "This Year"];

  const totalFleet = activeSeries.reduce((acc, curr) => (
    acc  + curr
  ));

  

  useEffect(() => {
    if(activeTimeline === "This Week"){
      setActiveSeries(weeklySeries)
    }else if(activeTimeline === "This Month"){
      setActiveSeries(monthlySeries)
    }else{
      setActiveSeries(yearlySeries);
    }
  }, [activeTimeline]);

  useEffect(() => {
    const efficiency = ((activeSeries[0] + activeSeries[1])/totalFleet)*100;
    setEfficiency(efficiency);
  },[activeSeries])

  // Fleet Status
  const fleetStatus = [
    {
      id: uuidv4(),
      color: "bg-primary",
      status: "on the move",
      value: activeSeries[0],
    },
    {
      id: uuidv4(),
      color: "bg-warning",
      status: "unutilized",
      value: activeSeries[1],
    },
    {
      id: uuidv4(),
      color: "bg-error",
      status: "under maintenance",
      value:activeSeries[2],
    },
  ];


  return (
    <>
      <Card className="p-0">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h5 className="text-lg font-medium text-dark leading-none">
            Fleet efficiency
          </h5>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="before:z-[0] focus-visible:ring-0 focus-visible:outline-0 group/item font-medium flex hover:bg-gray-200 dark:hover:bg-white/20 items-center gap-3 py-1.5 border border-border px-2 rounded-full bg-gray-100 dark:bg-white/10 text-dark ps-0">
                <p className="text-[13px]">{activeTimeline}</p>
                <Icon
                  icon="fluent:chevron-down-24-filled"
                  width={16}
                  height={16}
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="border-border border rounded-lg w-32 mt-1 overflow-hidden bg-surface shadow-lg p-0 relative z-20"
            >
              {timelines.map((item, index) => (
                <DropdownMenuItem
                  onClick={() => {
                    setActiveTimeline(item);
                  }}
                  key={index}
                  className={`px-4 py-2 hover:outline-0 cursor-pointer hover:bg-background text-dark text-sm flex items-start justify-between gap-4 hover group/item ${activeTimeline === item ? 'bg-background text-primary' : ''}`}
                >
                  {item}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="p-4 grid grid-cols-12 gap-0">
          <div className="col-span-6">
            <FleetChart activeSeries={activeSeries} activeTimeline={activeTimeline} />
          </div>
          <div className="col-span-6 flex items-center">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <h6 className="text-[28px] font-medium text-dark">{efficiency.toFixed(2)}%</h6>
                <div className="flex items-center gap-1">
                  <span className={`text-sm font-medium ${activeTimeline === "This Week" ? 'text-success' : 'text-error'}`}>
                    {activeTimeline === "This Month" ? '-1,63%' : activeTimeline === "This Year" ? '-2,33%' : '4,67%'}
                  </span>
                  <Icon
                    icon={`${activeTimeline === "This Week" ? 'ph:arrow-up-bold' : 'ph:arrow-down-bold'}`}
                    className={` ${activeTimeline === "This Week" ? 'text-success' : 'text-error'} -rotate-45 relative z-[0]`}
                    width={16}
                    height={16}
                    
                  />
                  <span className="text-sm font-medium text-lightgray">
                    vs last {activeTimeline.split(" ")[1].toLocaleLowerCase()}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {fleetStatus.map((item) => (
                  <div
                    className="flex items-center justify-between gap-4"
                    key={item.id}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`size-2 rounded-full ${item.color}`}
                      ></span>
                      <p className="text-sm text-lightgray font-medium max-w-36 min-w-36 truncate">
                        {item.status}
                      </p>
                    </div>
                    <span className="w-14 border-b-2 border-dashed border-border h-0.5"></span>
                    <h6 className="text-xl font-medium text-dark">
                      {item.value}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
