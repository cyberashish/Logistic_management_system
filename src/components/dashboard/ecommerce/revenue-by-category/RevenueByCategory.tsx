"use client";
import { Card } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react/dist/iconify.js";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
const Chart = dynamic(() => import("react-apexcharts") , {ssr:false});




const RevenueByCategory = () => {

    const {theme} = useTheme();

    const [chartKey, setChartKey] = useState(0);

    useEffect(() => {
      setChartKey(prev => prev + 1);
    }, [theme]);

    const chartData:{
        series: number[];
        options: ApexOptions;
      } = {
        series: [480, 110, 100, 50],
        options: {
          labels: ["Jeans", "Hoodie", "Outwear", "Other"],
          chart: {
            type: "donut",
            height: 190,
            fontFamily: "inherit",
            foreColor: "#adb0bb",
          },
          stroke: {
            show: true,
            colors: ["var(--color-surface)"], 
            width: 3,
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          colors: [
            "var(--color-subtleprimary)", 
            "var(--color-secondary)",
            "var(--color-pink)",
            "var(--color-brown)", 
          ],
          plotOptions: {
            pie: {
              donut: {
                size: "72%",
                labels: {
                  show: true,
                  total: {
                    show: true,
                    label: "Total",
                    fontSize: "19px",
                    fontWeight: 600,
                    color: "var(--color-dark)",
                    formatter: function (w: any) {
                      return w.globals.seriesTotals.reduce(
                        (a: number, b: number) => a + b,
                        0
                      );
                    },
                  },
                },
              },
            },
          },
          states: {
            active: {
              allowMultipleDataPointsSelection: false,
              filter: {
                type: 'none' 
              }
            }
          },
          tooltip: {
            theme: theme,
            fillSeriesColor: false,
          },
        },
      };

      const Categories = [
        {
            key: "1",
            category: "Jeans",
            color: "bg-primary"
        },
        {
            key: "2",
            category: "Hoodie",
            color: "bg-secondary"
        },
        {
            key: "3",
            category: "Outwear",
            color: "bg-pink"
        },
        {
            key: "4",
            category: "Other",
            color: "bg-brown"
        },
      ]
    
  return (
    <>
      <Card>
        <div className="flex items-center justify-between">
          <h5 className="text-lg font-semibold text-dark leading-none">
            Revenue By Category
          </h5>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="rounded-full focus-visible:ring-0 focus-visible:outline-0 group before:absolute before:top-1/2 before:-translate-y-1/2 before:start-1/2 before:-translate-x-1/2 before:size-8 before:rounded-full hover:before:bg-subtlebg dark:hover:before:bg-background dark:hover:text-white relative text-muted hover:text-primary before:z-[0] group/item">
                <Icon
                  icon="bi:three-dots"
                  width={18}
                  height={18}
                  className="group-hover/item:text-muted relative z-100"
                />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="border-border bg-surface shadow-lg p-0"
            >
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
        <div className="my-[26px]">
        <Chart
            key={chartKey}
            options={chartData.options}
            series={chartData.series}
            type="donut"
            height={205}
          />
        </div>

        <div className="grid grid-cols-12 gap-4">
        {
            Categories.map((item) => (
                <div key={item.key} className="lg:col-span-4 col-span-12 flex items-center gap-2">
                <span className={`size-2.5 rounded-full ${item.color} shrink-0`}></span>
                <p className="text-sm font-medium text-dark">{item.category}</p>
            </div>
            ))
        }
        </div>

      </Card>
    </>
  );
};

export default RevenueByCategory;


