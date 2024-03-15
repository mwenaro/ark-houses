import { Typography } from "@/components";
import { twMerge } from "tailwind-merge";

interface SidebarHeaderProps{
    className?:string;
    vendorName?:string
}

const SidebarHeader = ({vendorName ="Vendor Name",className =""}:SidebarHeaderProps) => {
  return (
    <div className={twMerge("", className)}>
        <Typography variant="h4">{vendorName}</Typography>
    </div>
  )
}

export default SidebarHeader