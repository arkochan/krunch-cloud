import { cn } from "@/lib/utils/cn";
import React from "react";
import Image from "next/image";
import Favourite from "@/components/ui/Favourite";
import RatingRound from "@/components/ui/RatingRound";
import Link from "next/link";
export default function RestaurantCard({
  id,
  name,
  verified,
  deliveryTime,
  deliveryCharge,
  rating,
  rateCaount: rateCount,
  favourite,
  tags,
  className = "",
}: {
  id: number;
  name: string;
  verified: boolean;
  deliveryTime: string;
  deliveryCharge: number;
  rating: number;
  rateCaount: number;
  favourite: boolean;
  tags: string[];
  className?: string;
}) {
  return (
    <Link
      href={`/restaurant/${id}`}
      className={cn(
        "min-w-64 h-[236px] overflow-hidden rounded-lg shadow relative ",
        className,
      )}
    >
      {/* Rating*/}
      <RatingRound rating={rating} rateCount={rateCount} />
      {/* Favourite */}
      <Favourite favourite={favourite} />
      <Image
        src="https://images.pexels.com/photos/4958773/pexels-photo-4958773.jpeg?cs=srgb&dl=pexels-roman-odintsov-4958773.jpg&fm=webp&w=1920&fit=crop"
        height={150}
        width={150}
        alt={`{name} Cover`}
        className="object-cover w-full h-32"
      />
      {/* Text detail box wrapper */}
      <div className="mx-3 ">
        {/*title and verified*/}
        <div className="flex flex-row mt-3 items-center space-x-1">
          <p className="text-lg leading-tight font-bold">{name}</p>
          {verified && (
            //svg wrapper
            <div className="text-teal">
              {/* Verified Svg */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-4 icon icon-tabler icons-tabler-filled icon-tabler-rosette-discount-check"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
              </svg>
            </div>
          )}
        </div>
        {/* Delivery charge and time */}
        <div className="flex flex-row items-center mt-2 text-xs text-gray-7E">
          {/* Delivery Charge*/}
          <div className="flex flex-row items-center">
            {/* Bike Svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="text-orange-FE size-4 "
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M19 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              <path d="M12 19l0 -4l-3 -3l5 -4l2 3l3 0" />
              <path d="M17 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
            </svg>{" "}
            <p className="ml-1 ">
              {deliveryCharge === 0 ? "Free Delivery" : `BDT ${deliveryCharge}`}{" "}
            </p>
          </div>
          {/* Delivery Time */}
          <div className="flex flex-row ml-4 items-center">
            {/* Clock Svg */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-4 text-orange-FE"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -.993 .883l-.007 .117v5l.009 .131a1 1 0 0 0 .197 .477l.087 .1l3 3l.094 .082a1 1 0 0 0 1.226 0l.094 -.083l.083 -.094a1 1 0 0 0 0 -1.226l-.083 -.094l-2.707 -2.708v-4.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" />
            </svg>
            <p className="ml-1">{deliveryTime} min</p>
          </div>
        </div>
        {/*Tags*/}
        <div className="flex flex-row items-center space-x-2 mt-3">
          {tags.map((tag) => (
            <div
              key={tag}
              className="bg-gray-F6 text-gray-8A text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
