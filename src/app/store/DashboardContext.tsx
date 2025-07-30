"use client";
import { createContext, useState } from "react";

interface DashboardContextProps{
    isMiniSidebar:boolean,
    setIsMiniSidebar: (value:boolean) => void,
    isSidebarHovered: boolean,
    setIsSidebarHovered: (value:boolean) => void,
    activeTimeline: string,
    setActiveTimeline: (value:string) => void,
    efficiency: number,
    setEfficiency: (value:number) => void
}

const DashboardContextInitial = {
    isMiniSidebar:false,
    setIsMiniSidebar: () => {},
    isSidebarHovered:false,
    setIsSidebarHovered: () => {},
    activeTimeline: "This Week",
    setActiveTimeline: () => {},
    efficiency: 0,
    setEfficiency: () => {}
}

const DashboardContext = createContext<DashboardContextProps>(DashboardContextInitial);

function DashboardContextProvider({children}:{children:React.ReactNode}){
    const [isMiniSidebar , setIsMiniSidebar] = useState(false);
    const [isSidebarHovered , setIsSidebarHovered] = useState(false);
    const [activeTimeline , setActiveTimeline] = useState("This Week");
    const [efficiency , setEfficiency] = useState(0);
    
    return (
        <>
         <DashboardContext.Provider value={{
          isMiniSidebar ,
          setIsMiniSidebar,
          isSidebarHovered,
          setIsSidebarHovered,
          activeTimeline ,
          setActiveTimeline,
          efficiency ,
          setEfficiency
         }} >
         {children}
         </DashboardContext.Provider>
        </>
    )
}

export {DashboardContext , DashboardContextProvider}