import { cn } from "@/lib/utils/cn";
import React from "react";

export default function SearchBar({
  placeholder = "Search",
  className = "",
}: {
  placeholder: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full relative", className)}>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full text-sm border focus:outline-none focus:ring-1 focus:ring-orange-FE bg-gray-FC rounded-xl border-gray-EF pl-11 pr-4 pt-4 pb-4 "
      />
      <svg
        className="absolute top-1/2 transform -translate-y-1/2 left-3 "
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
      <div>{ }</div>
    </div>
  );
}
