import React, { useContext } from "react";
import NavCollapse from "./NavCollapse";
import NavItem from "./NavItem";
import { sidebarItems, SideSubItemType } from "./sidebaritems";
import { DashboardContext } from "@/app/store/DashboardContext";
import { Icon } from "@iconify/react/dist/iconify.js";

const SidebarLayout = () => {
  const { isMiniSidebar, setIsSidebarHovered, isSidebarHovered } =
    useContext(DashboardContext);
  return (
    <>
      <div>
        {sidebarItems.map((navGroup) => {
          return (
            <div key={navGroup.id}>
              <div className="pt-6 pb-1.5 border-t border-border-t border-white/20">
                <div className="h-5">
                  {isMiniSidebar && isSidebarHovered ? (
                    <h6 className="text-xs !text-primary dark:!text-primary tracking-wider font-semibold uppercase">
                      {navGroup.caption}
                    </h6>
                  ) : isMiniSidebar ? (
                    <Icon
                      icon="entypo:dots-three-horizontal"
                      width={20}
                      height={20}
                      className="text-white/80 shrink-0 mx-3"
                    />
                  ) : (
                    <h6 className="text-xs text-lightgray dark:text-white/30 tracking-wider font-medium uppercase">
                      {navGroup.caption}
                    </h6>
                  )}
                </div>
              </div>
              {navGroup.offspring &&
                navGroup.offspring.map((sidebarItem: SideSubItemType) =>
                  !sidebarItem?.children ? (
                    <NavItem key={sidebarItem.id} item={sidebarItem} />
                  ) : (
                    <NavCollapse key={sidebarItem.id} item={sidebarItem} />
                  )
                )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SidebarLayout;
