"use client"
import { DashboardContext } from "@/app/store/DashboardContext";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";

const RunningVehicles = () => {
  const {efficiency , activeTimeline} = useContext(DashboardContext)
  return (
    <>
      <Card className="p-0 bg-primary/10">
        <div className="p-4 flex items-center gap-3 border-b border-white">
          <span className="size-2 rounded-full bg-primary relative">
            <span className="pulse-1 absolute top-1/2 start-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2"></span>
          </span>
          <h5 className="text-lg font-medium text-dark leading-none">
            Vehicles on the road
          </h5>
        </div>
        <div className="p-4">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <h6 className="text-2xl font-medium text-dark">
                {efficiency.toFixed(2)}%
              </h6>
              <div className="flex items-center gap-1">
                <span
                  className={`text-xs font-medium ${
                    activeTimeline === "This Week"
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {activeTimeline === "This Month"
                    ? "-1,63%"
                    : activeTimeline === "This Year"
                    ? "-2,33%"
                    : "4,67%"}
                </span>
                <Icon
                  icon={`${
                    activeTimeline === "This Week"
                      ? "ph:arrow-up-bold"
                      : "ph:arrow-down-bold"
                  }`}
                  className={` ${
                    activeTimeline === "This Week"
                      ? "text-success"
                      : "text-error"
                  } -rotate-45 relative z-[0]`}
                  width={16}
                  height={16}
                />
                <span className="text-xs font-medium text-lightgray">
                  vs last {activeTimeline.split(" ")[1].toLocaleLowerCase()}
                </span>
              </div>
            </div>
            <Button className="w-fit !text-xs px-6" size="sm" >Track Vehicles</Button>
          </div>
          {/* Truck Image */}
          
        </div>
      </Card>
    </>
  );
};

export default RunningVehicles;
