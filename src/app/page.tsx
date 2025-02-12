import FilterBar from "@/components/FilterBar";
import HomeHeadbar from "@/components/HomeHeadbar";
import RestaurantCard from "@/components/RestaurantCard";
import SearchBar from "@/components/ui/SearchBar";
import ItemSquare from "@/components/ItemSquare";
import Image from "next/image";
import Bottombar from "@/components/BottomNavBar";
import HeroMenu from "@/components/HEroMenu";
import CardContainer from "@/components/CardContainer";
import { Search } from "@/components/Search";
import { getAllRestaurants } from "@/lib/api/restaurants";
import { Restaurant } from "@/types/restaurant";

export default async function Home() {

  var restaurants: Restaurant[] = [];

  try {
    const data = await getAllRestaurants();
    restaurants = data as Restaurant[];
  } catch (error) {
    console.error("Failed to fetch restaurants", error);
  }
  return (
    <div className="min-h-screen">
      {/* <HeroMenu className="" /> */}
      <main className="flex md:mx-12 md:mt-4 lg:mx-16 mx-6  pb-10 flex-col ">
        <HomeHeadbar className="mt-8 " />
        <Search className="mt-6 max-w-4xl " />
        <FilterBar className="mt-7" />
        <div className="flex flex-row mt-7 justify-between">
          <span className="font-bold ">Featured Restaurants</span>
          <span className="text-orange-FE">View All &gt;</span>
        </div>
        {/* Restaurant Cards //TODO the card should have a little white space at end */}
        <CardContainer restaurants={restaurants} />
        <div>
          <p className="text-lg font-semibold">Popular Items</p>
          <div className=" pr-72 overflow-x-scroll mt-4 -mx-6">
            <div className="  pb-4 ml-6 flex flex-row">
              {/* <ItemSquare /> */}
              {/* <ItemSquare /> */}
            </div>
          </div>
        </div>
        <Bottombar classname="fixed bottom-0 left-0 right-0" />
      </main>
    </div>
  );
}
