import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
export default function FilterItem({
  imageSource,
  itemTitle,
  isSelected = false,
  className = "",
}: {
  imageSource: string;
  itemTitle: string;
  isSelected?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-full",
        isSelected ? "bg-orange-FE" : "bg-white",
        className,
      )}
    >
      <div className="rounded-full bg-white">
        <Image src={imageSource} alt={"FoodItem"} width={50} height={50} />
      </div>
      <span
        className={cn("text-xs", isSelected ? "text-white" : "text-gray-7E")}
      >
        {itemTitle}
      </span>
    </div>
  );
}
