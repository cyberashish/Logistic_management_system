
export interface SideSubItemType{
    id: string,
    icon: string,
    caption:string
    title: string,
    url: string,
    children?: any
}

interface SideItemType{
    id: string,
    caption:string
    offspring: any
}

const sidebarItems:SideItemType[] = [
    {
        id:"1",
        caption:"General",
        offspring:[
            // {
            //     id: "1",
            //     icon: "lucide-lab:home",
            //     title: "Home",
            //     children:[
            //         {
            //             id:"1",
            //             title:"Projects"
            //         },
            //         {
            //             id:"2",
            //             title:"Ecommerce"
            //         },
            //         {
            //             id:"3",
            //             title:"General"
            //         }
            //     ]
            // },
            {
                id: "2",
                icon: "basil:stack-solid",
                title: "Dashboard",
                url: "/"
            },
            {
                id: "3",
                icon: "mingcute:route-line",
                title: "Tracking",
                url: "/orders"
            },
            {
                id: "4",
                icon: "mdi:truck",
                title: "Trucks",
                url: "/products"
            },
            {
                id: "5",
                icon: "si:money-fill",
                title: "Expenses",
                url: "/customers"
            },
            {
                id: "6",
                icon: "uis:bag",
                title: "Jobs",
                url: "/marketing"
            },
        ]
    }
]

export {sidebarItems}