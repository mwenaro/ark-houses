"use client";
import { DashboardPageWrapper, Typography } from "@/components";
import { useFetch } from "@/hooks";
import { fetchData, strCapitalize } from "@/utils";
import Link from "next/link";
import {User  as Vendor} from '@/types/core'

export default function Recent({ params, vendor = null, title= null }: any) {
  const { data: vendors, error } = useFetch(
    `/api/user?vendor=${params?.vendor || vendor || "mds"}`
  );

  if (!Array.isArray(vendors) || vendors.length < 1)
    return (
      <div className="flex justify-center items-center m-10 mx-4">
        {" "}
        No vendors
      </div>
    );
  return (
    <DashboardPageWrapper>
      <Typography variant="h4" className="w-full font-normal">
       {title || 'Recent Vendors'}
      </Typography>
      <div className="w-full overflow-x-hidden grid grid-cols-5 lg:grid-cols-7 border-b-2 border-solid hover:bg-[#f9f9ff] py-3 mx-1 text-sm font-bold bg-[#f9f9ff] ">
        <span className="p-3">#</span>
        <span className=" col-span-2">Business Name (Code)</span>
        <span className="text-center hidden lg:flex">Status</span>
        <span className="">Phone</span>
        <span className="hidden lg:flex">Email</span>
        {/* <span>Phone</span> */}
        <span>Reg. Date</span>
      </div>
      {vendors.map((currentVendor: any, indx: number) => (
        <Link
          // href={`/${currentVendor.vendor}/dashboard?owner=${params.vendor}`}
          href={
            params?.vendor
              ? `/${
                  params?.vendor as string
                }/dashboard?owner=${currentVendor.vendor!}`
              : ""
          }
          key={`${currentVendor._id}-${indx}`}
          className="w-full overflow-x-hidden grid grid-cols-5 lg:grid-cols-7 border-b-2 border-solid hover:bg-[#f9f9ff] py-3 mx-1 text-sm justify-center items-center"
        >
          <span className="overflow-hidden p-3">{indx + 1}</span>

          <span className="  overflow-x-hidden col-span-2">
            {`${strCapitalize(currentVendor.businessName)} (${
              currentVendor.vendor
            })`}
          </span>

          <span className={`overflow-hidden hidden lg:flex `}>
            <span className="w-full flex justify-center items-center ">
              {" "}
              <span
                className={`p-1 rounded-full mx-2 ${
                  currentVendor.status ? "bg-green-300" : "bg-red-400"
                }`}
              ></span>
              {" " +
                strCapitalize(currentVendor.status ? "Active" : "Inactive")}
            </span>
          </span>
          <span className=" overflow-x-hidden ">{currentVendor.phone}</span>
          <span className="hidden lg:flex overflow-x-hidden ">
            {currentVendor.email}
          </span>
          {/* <span>{currentVendor.phone}</span> */}
          <span className="pl-1 text-center">
            {new Date(currentVendor.created_at).toISOString().split("T")[0]}
          </span>
        </Link>
      ))}
    </DashboardPageWrapper>
  );
}
