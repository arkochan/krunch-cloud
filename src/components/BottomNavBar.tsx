import { cn } from "@/utils/cn";
import CompassSVG from "@/components/svg/Compass";
import BagSVG from "@/components/svg/Bag";
import BellSVG from "@/components/svg/Bell";
import HeartSVG from "@/components/svg/Heart";
import LocationSVG from "@/components/svg/Location";
import NavBarIcon from "@/components/ui/NavBarIcon";

export default function Bottombar({ classname = "" }: { classname?: string }) {
  return (
    <div
      className={cn(
        "bg-white flex flex-row justify-center w-full h-14",
        classname,
      )}
    >
      <NavBarIcon SvgComponent={<CompassSVG />} />
      <NavBarIcon SvgComponent={<BagSVG />} />
      <NavBarIcon SvgComponent={<BellSVG />} />
      <NavBarIcon SvgComponent={<HeartSVG />} />
      <NavBarIcon SvgComponent={<LocationSVG />} />
    </div>
  );
}
