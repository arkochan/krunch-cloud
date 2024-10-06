import React from "react";
import Image from "next/image";
import HeartSVG from "./svg/heart";
import Favourite from "@/components/ui/Favourite";
import RatingRound from "@/components/ui/RatingRound";
export default function ItemSquare() {
  return (
    <div className="h-56 shadow-1 w-44 overflow-hidden  rounded-2xl">
      <div className="relative">
        <Image
          className="h-40 rounded-xl w-44 shadow-1 object-cover relative"
          src="https://images.deliveryhero.io/image/fd-bd/LH/crjq-listing.jpg?width=400&height=225"
          width={300}
          height={300}
          alt=""
        />
        <Favourite favourite={true} />
        <div className="absolute top-2 left-2 bg-white rounded-full px-2 py-1">
          <span className="text-orange-FE">$</span>
          <span className="text-xl">8.25</span>
        </div>
        <RatingRound
          className="absolute left-2 shadow bottom-0 -my-3 top-auto bg-white"
          rating={4.5}
          rateCount={200}
        />
      </div>
      <div className="px-2 py-4">
        <p>Salmon Salad</p>
        <p>Baked salmon fish</p>
      </div>
    </div>
  );
}
