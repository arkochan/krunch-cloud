"use client";
import { cn } from "@/lib/utils/cn";
export default function NavBarIcon({
  SvgComponent,
  className = "",
  onclick,
}: {
  SvgComponent: React.ReactElement;
  className?: string;
  onclick?: () => void;
}) {
  return (
    <button
      onClick={onclick}
      className={cn(
        "aspect-square rounded-2xl flex items-center justify-center ml-4 shadow-1",
        className,
      )}
    >
      {SvgComponent}
    </button>
  );
}
