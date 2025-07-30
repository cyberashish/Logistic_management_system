import { Icon } from "@iconify/react/dist/iconify.js";
import { DashboardMetric } from "./LogisticMetrics";

export default function Metric({item}:{item:DashboardMetric}) {
  return (
    <>
      <div className="col-span-4">
        <div className="flex items-center gap-3">
          <span className="size-15 rounded-full shrink-0 border border-border flex items-center justify-center bg-surface shadow text-dark">
            <Icon icon={item.icon} width={24} height={24} />
          </span>
          <div className="flex flex-col gap-1">
            <div className="flex items-end gap-2">
              <h6 className="text-2xl font-medium">{item.metricValue}</h6>
              <div className="flex items-center gap-1 relative bottom-1">
                <p className={`text-[13px] font-medium ${item.growthPercentage.startsWith("-") ? 'text-error' : 'text-primary' }`}>{
                    item.growthPercentage.startsWith("-") ? item.growthPercentage : item.growthPercentage
                    }%</p>
                <Icon
                  icon={` ${item.growthPercentage.startsWith("-") ? 'ph:arrow-down-bold' : 'ph:arrow-up-bold' }`}
                  width={16}
                  height={16}
                  className={` rotate-45 ${item.growthPercentage.startsWith("-") ? 'text-error' : 'text-success' }`}
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
            <p className="text-[13px] text-lightgray font-medium">
              {item.metricDescription}
            </p>
             {
                Boolean(item.badgeValue) ? <span className="py-0.5 rounded-full shrink-0 text-xs px-2 bg-error text-white font-medium" >{item.badgeValue}</span> : null
             }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
