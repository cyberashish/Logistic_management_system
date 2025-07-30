
'use client' 

import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


export function DailyOrderChart(){

  const {theme} = useTheme();

    const option:ApexOptions = {
        chart: {
            id: "sparkline1",
            type: "area",
            height: 60,
            sparkline: {
              enabled: true,
            },
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        stroke: {
            curve: "smooth",
            width: 2,
          },
          fill: {
            type: "gradient",
            gradient: {
              shadeIntensity: 0,
              inverseColors: false,
              opacityFrom: 0.15,
              opacityTo: 0,
              stops: [20, 180],
            },
            opacity: 0.5,
          },
      
          markers: {
            size: 0,
          },
          tooltip: {
            theme: theme,
            fixed: {
              enabled: false,
            },
            x: {
              show: false,
            },
          },
      }

    const series = [{
        name: 'daily order',
        color: "var(--color-brown)",
        data: [30, 29.31, 29.7, 29.7, 31.32, 31.65, 31.13, 29.8, 31.79, 31.67, 32.39, 30.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 34, 34.50, 34.50, 32.53, 31.37, 32.43, 32.44, 30.2,
            30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 31.02, 30.33, 32.95, 31.89, 30.01, 30.88, 30.69, 30.58, 32.02, 32.14, 30.37, 30.51, 32.65, 32.64, 32.27, 32.1, 32.91, 30.65, 30.8, 31.92
        ],
      }]

    return(
        <>
            <ApexChart type="area" options={option} series={series} height={70} />
        </>
    )
    
}