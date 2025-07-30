"use client"
import React from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesChart = () => {
    const {theme} = useTheme();
    const series = [
        {
          color:"var(--color-subtleprimary)",
          name: "Eco-Friendly",
          data: [120, 190, 160, 250, 220, 310, 270, 350, 300], 
        },
        {
          color:"var(--color-secondary)",
          name: "Non-Eco-Friendly",
          data: [100, 85, 120, 90, 110, 70, 130, 60, 75],
        },
      ];

  const options:ApexOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
    },
    legend: {
        show: false,
      },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      labels:{
        show:true,
        style: {
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
          colors:`${theme === "light" ? 'var(--color-muted)' : '#ffffff2a'}`
      },
    },
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
    },
    yaxis: {
      title: {
        text: "Sales (in units)",
        style:{
            color:`${theme === "light" ? 'var(--color-dark)' : '#ffffff99'}`,
            fontFamily:"inherit",
            fontWeight:400,
            fontSize:"14px"
        }
      },
      labels:{
        style: {
          fontSize: '12px',
          fontFamily: 'inherit',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
          colors:`${theme === "light" ? 'var(--color-muted)' : '#ffffff4a'}`
      },
      }
    },
    colors: ["var(--color-primary)", "var(--color-secondary)"], // green & red for clear distinction
    plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '50%',
          borderRadius: 8,
          dataLabels: {
            position: 'top',
            total: {
              enabled: false,
              formatter: undefined,
              offsetX: 0,
              offsetY: 0,
              style: {
                color: '#373d3f',
                fontSize: '12px',
                fontFamily: undefined,
                fontWeight: 600
              }
            }
        }
        },
      },
      dataLabels: {
        enabled: false,
      },
    fill: {
      opacity: 1,
    },
    grid: {
        show: true,
        borderColor: `${theme === "light" ? 'var(--color-border)' : '#ffffff4a'}`,
        strokeDashArray: 5
      },
      tooltip: {
        style: {
            fontSize: '14px',
            fontFamily:"inherit"
          },
        y: {
          formatter: function (val:number) {
            return "$ " + val + " thousands"
          }
        },
        theme: theme
      }
  };

  return <>
  <ApexChart options={options} series={series} type="bar" height={315} />
   <div className="flex items-center justify-center gap-2 -mt-2">
     <div className="flex items-center gap-1">
        <span className="size-2.5 rounded-full bg-primary"></span>
        <p className="text-sm font-medium text-dark">Eco-friendly</p>
     </div>
     <div className="flex items-center gap-1">
        <span className="size-2.5 rounded-full bg-secondary"></span>
        <p className="text-sm font-medium text-dark">Non-Eco-friendly</p>
     </div>
   </div>
  </>;
};

export default SalesChart;
