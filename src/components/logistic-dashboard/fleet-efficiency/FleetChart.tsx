"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
const Chart = dynamic(() => import("react-apexcharts") , {ssr:false});




const FleetChart = ({activeSeries , activeTimeline}:{activeSeries:number[] , activeTimeline:string}) => {

    const {theme} = useTheme();

    const [chartKey, setChartKey] = useState(0);

    useEffect(() => {
      setChartKey(prev => prev + 1);
    }, [theme , activeTimeline]);

    const chartData:{
        series: number[];
        options: ApexOptions;
      } = {
        series: activeSeries,
        options: {
          labels: ["Utilizes", "Unutilized", "Maintena.."],
          chart: {
            type: "donut",
            height: 190,
            fontFamily: "inherit",
            foreColor: "#adb0bb",
          },
          stroke: {
            show: true,
            colors: ["var(--color-surface)"], 
            width: 5,
            lineCap: 'round'
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          colors: [
            "var(--color-primary)", 
            "var(--color-warning)",
            "var(--color-error)",
          ],
          plotOptions: {
            pie: {
              donut: {
                size: "60%",
                
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
    
  return (
    <div className="-ms-6" >
        <Chart
            key={chartKey}
            options={chartData.options}
            series={chartData.series}
            type="donut"
            height={210}
          />
    </div>
  );
};

export default FleetChart;


