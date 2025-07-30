import {v4 as uuidv4} from "uuid";
import { SalesChart } from "./SalesChart";
import EcommCard from "./EcommCard";
import { OrdersChart } from "./OrderChart";
import { DailyOrderChart } from "./DailyOrderChart";
import { DailyRevenueChart } from "./DailyRevenueChart";

const EcommInsightCards = [
  {
   id: uuidv4(),
   metric: "Total Sales",
   value: "12,463",
   changePercentage: "+ 20.08%",
   subtitle: "Compared to Jan 2024",
   color: "bg-tertiary",
   icon:"solar:dollar-linear",
   chart: <SalesChart/>
  },
  {
   id: uuidv4(),
   metric: "Orders Value",
   value: "78,596",
   changePercentage: "- 10.02%",
   subtitle: "Compared to Aug 2024",
   color: "bg-secondary",
   icon:"solar:cart-4-broken",
   chart: <OrdersChart/>
  },
  {
   id: uuidv4(),
   metric: "Daily Orders",
   value: "95,789",
   changePercentage: "+ 13.23%",
   subtitle: "Compared to may 2024",
   color: "bg-brown",
   icon: "solar:box-broken",
   chart: <DailyOrderChart/>
  },
  {
   id: uuidv4(),
   metric: "Daily Revenue",
   value: "41,954",
   changePercentage: "- 17.06%",
   subtitle: "Compared to july 2024",
   color: "bg-pink",
   icon: "fluent:arrow-growth-24-filled",
   chart: <DailyRevenueChart/>
  },
]


const InsightCards = () => {
  return (
    <div className="grid grid-cols-12 gap-6">
     {
       EcommInsightCards.map((item) => (
         <EcommCard key={item.id} item={item} />
       ))
     }
    </div>
  );
};

export default InsightCards;
