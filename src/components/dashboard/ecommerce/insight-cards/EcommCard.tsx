import { Card } from "@/components/ui/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { Icon } from "@iconify/react/dist/iconify.js";


const EcommCard = ({item}:any) => {
  return (
      <div className="lg:col-span-3 md:col-span-6 col-span-12">
        <Card className="pb-2" >
          <div className="flex items-start justify-between mb-5">
            <h6 className="text-lg tracking-normal font-semibold text-subtlegray leading-none">
              {item.metric}
            </h6>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="rounded-full focus-visible:ring-0 focus-visible:outline-0 group before:absolute before:top-1/2 before:-translate-y-1/2 before:start-1/2 before:-translate-x-1/2 before:size-8 before:rounded-full hover:before:bg-subtlebg dark:hover:before:bg-background dark:hover:text-white relative text-muted hover:text-primary before:z-[0] group/item">
                  <Icon icon="bi:three-dots" width={18} height={18} className="group-hover/item:text-muted relative z-100" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="border-border bg-surface shadow-lg p-0">
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
           <div className="flex items-center gap-4 mb-5">
            <span className={`size-12 rounded-full ${item.color} text-white flex items-center justify-center`}>
                <Icon icon={item.icon} width={30} height={30} />
            </span>
            <div className="flex flex-col">
                <div className="flex items-center gap-2">
                    <h5 className="text-2xl font-semibold text-dark">{item.value}</h5>
                    <div className="flex items-center gap-1">
                        <span className={`size-[18px] rounded-full flex items-center justify-center ${item.changePercentage.includes("+") ? 'bg-success/10 text-success' : 'bg-error/10 text-error'}`}>
                        {
                          item.changePercentage.includes("+")  ?  <Icon icon="majesticons:arrow-up-line" width={16} height={16} className="rotate-45" /> :  <Icon icon="majesticons:arrow-down-line" width={16} height={16} className="rotate-45" />
                        }
                        </span>
                        <p className={`text-sm font-medium ${item.changePercentage.includes("+") ? 'text-success' : 'text-error'}`}>{item.changePercentage}</p>
                    </div>
                </div>
                <p className="text-sm font-medium text-subtlegray">{item.subtitle}</p>
            </div>
           </div>
           {item.chart}
        </Card>
      </div>
  );
};

export default EcommCard;
