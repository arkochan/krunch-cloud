import { getRestaurantById } from "@/lib/api/restaurants"

export default async function Page({
  params,
}: {
  params: Promise<{ r_id: string }>
}) {
  const restaurantID = Number((await params).r_id)
  const restaurant = await getRestaurantById(restaurantID)
  console.log(restaurant)

  return <div className="text-orange-FE text-3xl font-bold shadow-gray-32"> {restaurant.name}</div>
}
