import FleetEfficiency from "@/components/logistic-dashboard/fleet-efficiency/FleetEfficiency";
import IncomingCommunication from "@/components/logistic-dashboard/IncomingCommunication/IncomingCommunication";
import LogisticMetrics from "@/components/logistic-dashboard/logistic-metrics/LogisticMetrics";
import RunningVehicles from "@/components/logistic-dashboard/running-vehicles/RunningVehicles";




export default function Home() {

  return (
    <>
     <div className="grid grid-cols-12 gap-4">
      <div className="lg:col-span-9 col-span-12 grid grid-cols-12 gap-4">
         <div className="col-span-12">
          <LogisticMetrics/>
         </div>
         <div className="lg:col-span-8 col-span-12">
           <FleetEfficiency/>
         </div>
         <div className="lg:col-span-4 col-span-12">
           <RunningVehicles/>
         </div>
      </div>
      <div className="lg:col-span-3 col-span-12">
        <IncomingCommunication/>
      </div>
     </div>

    </>
  );
}
