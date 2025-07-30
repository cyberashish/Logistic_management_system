"use client";
import { useContext } from "react";
import Header from "./layouts/header/Header";
import Sidebar from "./layouts/sidebar/Sidebar";
import { DashboardContext } from "../store/DashboardContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isMiniSidebar } = useContext(DashboardContext);
  return (
    <div>
      <Header />
      <Sidebar />
      <div className={` ${isMiniSidebar ? "lg:ms-23 ms-0" : "lg:ms-[276px] ms-0"} transition-all`}>
        <div className="p-6 px-2">{children}</div>
      </div>
    </div>
  );
}
