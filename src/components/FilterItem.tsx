import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
export default function FilterItem({
  imageSource,
  itemTitle,
  selected = false,
  className = "",
}: {
  imageSource: string;
  itemTitle: string;
  selected?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-full shadow-1 flex flex-col items-center p-2 h-24",
        selected ? "bg-orange-FE" : "bg-white",
        className,
      )}
    >
      <div className="overflow-hidden mb-2 rounded-full bg-white w-14">
        <Image src={imageSource} alt={"FoodItem"} width={150} height={150} />
      </div>
      <span
        className={cn("text-xs", selected ? "text-white" : "text-gray-7E")}
      >
        {itemTitle}
      </span>
    </div>
  );
}
