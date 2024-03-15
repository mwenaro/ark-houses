"use client";
import {
  DashboardAuthNav,
  Sidebar,
  SidebarNav,
  VendorHeader,
} from "@/components";
import { ADMIN_NAV_ITEMS, VENDOR_NAV_ITEMS } from "@/constants";
import { useGlobalContext } from "@/context/GlobalContext";
import { NavItem } from "@/types";
import LocalStorageManager from "@/utils/localStorage";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function DashboardWrapper({
  params,
  children,
}: {
  params: any;
  children: React.ReactNode;
}) {
  const [navHeaderTitle, setNavHeaderTtitle] = useState("");
  const vendor = params.vendor;
  const pathname = usePathname();
  const { data: globalData, setData } = useGlobalContext();
  const user = globalData.user || LocalStorageManager.get("user");

  useEffect(() => {}, [navHeaderTitle]);
  const navItems: NavItem[] =
    ["admin", "su"].includes(user.role) && user.vendor === vendor
      ? ADMIN_NAV_ITEMS
      : VENDOR_NAV_ITEMS;

  return (
    <div className="w-full flex flex-col max-w-7xl mx-auto">
      <VendorHeader logoImageSrc={"/assets/logo-default.png"} className="">
        {/* This holds the notification bell and ther avator icon */}
        <DashboardAuthNav className="" />
      </VendorHeader>
      {/*  */}
      <div className="mt-20 w-full flex flex-col sm:flex-row bg-dpage-gray ">
        <Sidebar className="text-white" vendor={navHeaderTitle || vendor}>
          <SidebarNav navItems={navItems} baseUrl={`/${vendor}/dashboard`} />
        </Sidebar>
        {/* Page roote */}
        <div
          className={`w-full sm:flex-1  mx-2 md:mx-8 my-4 flex flex-col ${
            pathname.includes("banners") ? "" : "bg-white"
          }  rounded-lg min-h-screen h-fit  `}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
