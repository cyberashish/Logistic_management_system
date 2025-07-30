
'use client' 

import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


export function OrdersChart(){

  const {theme} = useTheme();

    const option:ApexOptions = {
        chart: {
            id: "sparkline3",
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
        name: 'order',
        color: "var(--color-secondary)",
        data: [30, 32.31, 31.47, 30.69, 29.32, 31.65, 31.13, 31.77, 31.79, 31.67, 32.39, 32.63, 32.89, 31.99, 31.23, 31.57, 30.84, 31.07, 31.41, 31.17, 32.37, 32.19, 32.51, 32.53, 31.37, 30.43, 30.44, 30.2,
            30.14, 30.65, 30.4, 30.65, 31.43, 31.89, 31.38, 30.64, 30.02, 30.33, 30.95, 31.89, 31.01, 30.88, 30.69, 30.58, 32.02, 32.14, 32.37, 32.51, 32.65, 32.64, 32.27, 32.1, 32.91, 33.65, 33.8, 33.92
        ],
      }]

    return(
        <>
            <ApexChart type="area" options={option} series={series} height={70} />
        </>
    )
    
}