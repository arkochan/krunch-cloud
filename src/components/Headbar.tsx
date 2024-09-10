import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
export default function HeardBar({ className = "" }: { className: string }) {
  return (
    <div
      className={cn(
        className,
        "flex flex-row text-sm leading-none h-full items-start justify-between w-full",
      )}
    >
      <div>
        <button className="size-9 shadow-1 flex justify-center items-center rounded-xl  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path d="M0 0h24v24H0z" stroke="none" />
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className=" flex flex-col items-center font-medium">
        <span className="flex flex-row items-center text-blue-gray-9A">
          Deliver to{" "}
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 10l6 6l6 -6-12" />
          </svg>
        </span>
        {/* //TODO: Add Location*/}
        <span className="text-orange-FE">Location</span>
      </div>
      <Image
        className=" size-9 rounded-xl "
        src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=250&t=st=1725264514~exp=1725265114~hmac=d1dfdb73697b715c1efc1643b2cdd5c9e7c76eef32dd84340d0ce6eee13fb078"
        alt="logo"
        width={100}
        height={100}
      />
    </div>
  );
}
