import { getRestaurantById } from "@/lib/api/restaurants";
import RestaurantHeader from "@/components/RestaurantHeader";
import RestaurantNav from "@/components/RestaurantNav";
import RestaurantPageClient from "@/components/RestaurantPageClient";
import { notFound } from "next/navigation";
import { Metadata } from "next";

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ r_id: string }>
}): Promise<Metadata> {
  const restaurantID = Number((await params).r_id);
  
  if (isNaN(restaurantID) || restaurantID <= 0) {
    return {
      title: "Restaurant Not Found",
      description: "The restaurant you're looking for doesn't exist.",
    };
  }

  const restaurant = await getRestaurantById(restaurantID);
  
  if (!restaurant) {
    return {
      title: "Restaurant Not Found",
      description: "The restaurant you're looking for doesn't exist.",
    };
  }

  return {
    title: `${restaurant.name} - Order Online`,
    description: `Order from ${restaurant.name} located at ${restaurant.address}. Browse our menu with ${restaurant.items?.length || 0} delicious items.`,
    keywords: `${restaurant.name}, food delivery, restaurant, order online, ${restaurant.address}`,
    openGraph: {
      title: `${restaurant.name} - Order Online`,
      description: `Order from ${restaurant.name}. Browse our delicious menu items.`,
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ r_id: string }>
}) {
  const restaurantID = Number((await params).r_id);
  
  // Validate the restaurant ID
  if (isNaN(restaurantID) || restaurantID <= 0) {
    notFound();
  }

  const restaurant = await getRestaurantById(restaurantID);
  
  // If restaurant is not found, show 404
  if (!restaurant) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-FC">
      {/* Navigation */}
      <RestaurantNav title={restaurant.name} />
      
      {/* Content */}
      <div className="max-w-lg mx-auto h-full px-6 w-full">
        <div className="space-y-6 py-6 pb-24">
          {/* Restaurant Header */}
          <RestaurantHeader
            name={restaurant.name}
            address={restaurant.address}
            rating={4.7}
            rateCount={145}
            deliveryTime="25-30 min"
            deliveryFee={2.99}
          />

          {/* Client-side interactive components */}
          <RestaurantPageClient restaurant={restaurant} />
        </div>
      </div>
    </div>
  );
}
