"use client"
import { Typography } from "@/components";
import { FaBell,  FaUserCircle } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import ProfileLogoutModal from "./ProfileLogoutModal";
import { useState } from "react";

export default function DashAuthNav({
  className = "",
  vendor = ''
}: {
  className?: string;
  vendor?:string
}) {
const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div
      className={twMerge(`w-3/12  min-w-[200px] grid grid-cols-2 content-center`, className)}
    >
      <div className="hidden justify-end items-center   ">
        {/* Search box */}
        <input
          placeholder="Search ..."
          id="searchText"
          name="searchText"
          // onChange={(e)=>console.log(e.target.value)}
          className="rounded-lg px-6 py-2 border-2 border-solid border-slate-600 block mx-3"
        />
      </div>

      <div></div>
      {/*Notifications & user menu */}
      <div className="grid grid-cols-2">
        <div className="flex-1 p-3   border-solid border-l-2 border-slate-500 flex items-center justify-center">
          <FaBell />
        </div>
        <div className="flex-1 p-3  border-l-2 border-slate-500 flex items-center justify-center relative">
          {/* <span className="w-10/12 bg-slate-300 rounded-full h-full aspect-square">x</span> */}
          <FaUserCircle
            className="text-3xl"
            onClick={() => setIsModalOpen(!isModalOpen)}
          />
          {/* Logout Modal */}
        {isModalOpen && <ProfileLogoutModal vendor ={vendor}/> }
        </div>
      </div>
    </div>
  );
}
