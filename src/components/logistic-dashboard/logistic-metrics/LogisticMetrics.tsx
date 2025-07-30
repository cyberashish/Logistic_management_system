import { Icon } from "@iconify/react/dist/iconify.js";
import {v4 as uuidv4} from "uuid";
import Metric from "./Metric";

export type DashboardMetric = {
    id: string;
    metricValue: string;
    growthPercentage: string;
    metricDescription: string;
    icon: string;
    badgeValue: string;
  };

export default function LogisticMetrics(){
    const metrics: DashboardMetric[] = [
        {
            id: uuidv4(),
            metricValue:"50",
            growthPercentage:"2,87",
            metricDescription:"On-time shipments",
            icon:"fluent:globe-clock-20-filled",
            badgeValue:""
        },
        {
            id: uuidv4(),
            metricValue:"23",
            growthPercentage:"2,87",
            metricDescription:"Average miles",
            icon:"tabler:truck-filled",
            badgeValue:""
        },
        {
            id: uuidv4(),
            metricValue:"65",
            growthPercentage:"-1,63",
            metricDescription:"Accepted bids",
            icon:"icon-park-solid:check-one",
            badgeValue:"12"
        },
    ]
    return (
        <>
         <div className="grid grid-cols-12 gap-6">
         {
            metrics.map((item) => (
                <Metric key={item.id} item={item} />
            ))
         }
         </div>
        </>
    )
}