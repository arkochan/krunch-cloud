import React from "react";
import { cn } from "@/utils/cn";

export default function RatingRound({ rateCount, rating, className = "" }: {
  rateCount: number,
  rating: number,
  className?: string
}) {
  return (
    <div className={cn("flex flex-row space-x-1 bg-white rounded-full absolute top-2 left-2 px-2 py-1 items-center", className)}>
      <span className="text-xs font-bold">{rating}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="sharp"
        stroke-linejoin="sharp"
        className="text-yellow size-3 icon icon-tabler icons-tabler-outline icon-tabler-star mb-[3px]"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
      </svg>
      <span className="text-[8px]/4 text-gray-97">({rateCount})</span>
    </div>

  );
}
