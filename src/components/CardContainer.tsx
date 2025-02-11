import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { getAllRestaurants } from "@/lib/api/restaurants";
import { Restaurant } from "@/types/restaurant";


export default function CardContainer({ restaurants }: { restaurants: Restaurant[] }) {

  return (
    <div className="pr-72 overflow-x-scroll mt-4 -mx-6">
      <div className="pb-4 ml-6 flex flex-row">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            id={restaurant.id}
            key={restaurant.id}
            className="mr-6"
            name={restaurant.name}
            verified={true}
            deliveryTime="10-15"
            deliveryCharge={0}
            rating={4.5}
            rateCaount={24}
            favourite={true}
            tags={["Fast Food", "Burger"]}
          />
        ))}
      </div>
    </div>
  );
}
