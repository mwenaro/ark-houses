import { Typography } from "@/components";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  className?: string;
  children?: React.ReactNode;
  vendor?: string;
}

const Sidebar = ({
  children,
  className = "",
  vendor = "vendor",
}: SidebarProps) => {
  return (
    <aside
      className={twMerge(
        "w-full h-fit sm:w-1/5 relative  bg-dashboard-dark flex flex-col gap-5 sm:h-screen min-h-fit px-0 my-1 sm:my-1 sm:px-3",
        className
      )}
    >
      <div>
        <Typography
          variant="h3"
          className="px-3 md:px-8 py-2 md:py-4 font-bold uppercase"
        >
          {vendor}
        </Typography>
      </div>
      {children}
    </aside>
  );
};

export default Sidebar;
