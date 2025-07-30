"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";

export default function ThemeMode(){
    const { theme, setTheme } = useTheme();
    function handleTheme(){
        if(theme === "light"){
            setTheme("dark")
        }else{
            setTheme("light")
        }
    }
    return (
        <>
          <button onClick={() => handleTheme()} className="p-2.5 bg-surface shadow rounded-full focus-visible:ring-0 focus-visible:outline-0 notification-btn dark:hover:bg-primary dark:hover:text-white group hover:bg-primary/20 relative text-muted hover:text-primary">
           <div className="h-[18px] w-[18px]" >
           {
                theme === "light" ? <Icon icon="solar:moon-outline" width={18} height={18} /> : <Icon icon="solar:sun-outline" width={18} height={18} />
            }
           </div>
          </button>
        </>
    )
}