import FilterBar from "@/components/FilterBar";
import HomeHeadbar from "@/components/HomeHeadbar";
import RestaurantCard from "@/components/RestaurantCard";
import SearchBar from "@/components/SearchBar";
import ItemSquare from "@/components/ItemSquare";
import Image from "next/image";
import Bottombar from "@/components/BottomNavBar";

export default function Home() {
  return (
    <main className="flex mx-6 min-h-screen pb-10 flex-col ">
      <HomeHeadbar className="mt-8 " />
      <div className="text-3xl mt-8 font-bold text-gray-32">
        What would you like <br />
        to order?
      </div>
      <div className="flex flex-row mt-5">
        <SearchBar placeholder={"Find for food or restaurant..."} />
        <button className="aspect-square rounded-2xl flex items-center justify-center ml-4 shadow-1">
          {" "}
          <svg
            className="text-orange-FE"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M14 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 6l8 0" />
            <path d="M16 6l4 0" />
            <path d="M8 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 12l2 0" />
            <path d="M10 12l10 0" />
            <path d="M17 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M4 18l11 0" />
            <path d="M19 18l1 0" />
          </svg>
        </button>
      </div>
      <FilterBar className="mt-7" />
      <div className="flex flex-row mt-7 justify-between">
        <span className="font-bold ">Featured Restaurants</span>
        <span className="text-orange-FE">View All &gt;</span>
      </div>
      {/* Restaurant Cards //TODO the card should have a little white space at end */}
      <div className=" pr-72 overflow-x-scroll mt-4 -mx-6">
        <div className="  pb-4 ml-6 flex flex-row">
          <RestaurantCard
            className="mr-6"
            name="McDonald's"
            verified={true}
            deliveryTime="10-15"
            deliveryCharge={0}
            rating={4.5}
            rateCaount={24}
            favourite={true}
            tags={["Fast Food", "Burger"]}
          />
          <RestaurantCard
            className="mr-6"
            name="Burger King"
            verified={true}
            deliveryTime="30-40"
            deliveryCharge={0}
            rating={4.5}
            rateCaount={100}
            favourite={true}
            tags={["Fast Food", "Burger"]}
          />
        </div>
      </div>
      <div>
        <p className="text-lg font-semibold">Popular Items</p>
        <div className=" pr-72 overflow-x-scroll mt-4 -mx-6">
          <div className="  pb-4 ml-6 flex flex-row">
            <ItemSquare />
            <ItemSquare />
          </div>
        </div>
      </div>
      <Bottombar classname="fixed bottom-0 left-0 right-0" />
    </main>
  );
}
