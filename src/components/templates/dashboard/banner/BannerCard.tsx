"use client";
import { Img } from "@/components";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
interface BannerCardProps {
  indx: number;
  activeIndx: number | null;
  banner: { name: string; src: string };
  setActiveIndx: any;
  uploadField: ReactNode;
  className?: string;
}

export default function BannerCard({
  indx,
  activeIndx,
  banner,
  setActiveIndx,
  uploadField,
  className = "",
}: BannerCardProps) {
  // useEffect(() => {

  // }, [activeIndx])

  return (
    <div
      className={twMerge(
        `bg-white text-center h-56 p-4 flex flex-col`,
        className
      )}
    >
      {indx === activeIndx ? (
        uploadField
      ) : (
        <>
          <div className="w-full flex justify-between  items-center mb-2 h-1/4">
            <span className="border-b-2 w-2/6 text-left">Banner{indx + 1}</span>
            <button
              onClick={() => setActiveIndx(indx)}
              className="px-4 py-2  rounded-sm border-2 hover:bg-gray-400 hover:mouse-pointer"
            >
              Edit
            </button>
          </div>
          <div className="w-full bg-gray-400 flex-1">
            <Img
              src={
                banner.src.includes("default")
                  ? `/assets/defaults/${banner.src}`
                  : banner.src.includes("http")
                  ? banner.src
                  : `/uploads/${banner.src}`
              }
              alt="banner img"
              className="w-full "
              priority={true}
            />
          </div>
        </>
      )}
    </div>
  );
}
