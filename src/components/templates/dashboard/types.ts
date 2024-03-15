import React from "react";



type navItem = {title:string, href:string}
export interface SidebarNavProps{
    navItems:navItem[],
    className?:string,
    baseUrl?:string,
    children?:React.ReactNode
    path?:string
}


