"use client";
export default function NavBarIcon({
  SvgComponent,
}: {
  SvgComponent: React.ReactElement;
}) {
  return (
    <button className="aspect-square rounded-2xl flex items-center justify-center ml-4 shadow-1">
      {SvgComponent}
    </button>
  );
}
