"use client";
import React from "react";
import { cn } from "@/lib/utils/cn";
import CompassSVG from "@/components/svg/Compass";
import BagSVG from "@/components/svg/Bag";
import BellSVG from "@/components/svg/Bell";
import HeartSVG from "@/components/svg/Heart";
import LocationSVG from "@/components/svg/Location";
import NavBarIcon from "@/components/ui/NavBarIcon";

export default function Bottombar({ classname = "" }: { classname?: string }) {
  const [activeButton, setActiveButton] = React.useState("compass");
  return (
    <div
      className={cn(
        "text-orange-FE bg-white flex flex-row justify-center w-full h-14",
        classname,
      )}
    >
      <NavBarIcon
        onclick={() => setActiveButton("compass")}
        className={cn(
          "",
          activeButton == "compass" ? "text-orange-FE" : "text-gray-D3",
        )}
        SvgComponent={<CompassSVG />}
      />
      <NavBarIcon
        onclick={() => setActiveButton("bag")}
        className={cn(
          "",
          activeButton == "bag" ? "text-orange-FE" : "text-gray-D3",
        )}
        SvgComponent={<BagSVG />}
      />
      <NavBarIcon
        onclick={() => setActiveButton("bell")}
        className={cn(
          "",
          activeButton == "bell" ? "text-orange-FE" : "text-gray-D3",
        )}
        SvgComponent={<BellSVG />}
      />
      <NavBarIcon
        onclick={() => setActiveButton("heart")}
        className={cn(
          "",
          activeButton == "heart" ? "text-orange-FE" : "text-gray-D3",
        )}
        SvgComponent={<HeartSVG />}
      />
      <NavBarIcon
        onclick={() => setActiveButton("location")}
        className={cn(
          "",
          activeButton == "location" ? "text-orange-FE" : "text-gray-D3",
        )}
        SvgComponent={<LocationSVG />}
      />
    </div>
  );
}
