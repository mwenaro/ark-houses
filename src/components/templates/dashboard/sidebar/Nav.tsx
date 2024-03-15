"use client";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { SidebarNavProps } from "../types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = ({
  navItems,
  className = "",
  baseUrl = "/dashboard",
}: SidebarNavProps) => {
  const pathname = usePathname();

  const [activeLink, setActiveLink] = useState<string>("");
  const [isVisible,setVisibility]=useState(false)

  useEffect(() => {}, [activeLink]);

  const isActiveRoute = (link: string) => {
    if (link === "") {
      if (pathname.split("/")[pathname.split("/").length - 1] == "dashboard") {
        return true;
      }

      return false;
    }

    return pathname.includes(link);
  };

  const handleSetActiveLink = (item: { href: string }) => {
    setActiveLink(item.href);
    setVisibility(!isVisible)
  };

  const myNav =  <ul
  className={twMerge(
    `w-full ${isVisible ? 'flex' : "hidden"}  md:flex flex-col gap-1 bg-dashboard-dark `,
    className
  )}
>
  {navItems.map((item, indx: number) => (
    <li
      key={indx}
      onClick={() =>handleSetActiveLink(item)}
      className={`mx-2 rounded-[2px] w-full overflow-hidden ${
        isActiveRoute(item.href.trim())
          ? "border-l-[5px] border-solid border-white"
          : ""
      }`}
    >
      <Link
        className={`w-full block px-6 py-3 hover:bg-dashboard-gra_end
                 ${
                   isActiveRoute(item.href.trim())
                     ? " bg-dashboard-nav_item_bg  bg-gradient-to-r from-dashboard-gra_start to-dashboard-gra_end"
                     : ""
                 }`}
        href={`${baseUrl}/${item.href}`}
      >
        {item.title}
      </Link>
    </li>
  ))}
</ul>

  return (
    <>
   {
    // isVisible ? myNav : ""
    myNav
   }
      <div className="absolute top-1 right-1 w-12 h-12 sm:hidden" onClick={()=>setVisibility(!isVisible)}>|||||</div>
</>
  );
};

export default Nav;
